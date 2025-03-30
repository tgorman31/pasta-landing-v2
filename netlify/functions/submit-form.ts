import { createClient } from '@supabase/supabase-js';
import type { Handler } from '@netlify/functions';

interface ProjectRange {
    range: string;
    count: number;
}

interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
    'cf-turnstile-response'?: string; // Make optional
    [key: string]: string | number | undefined; // For project range fields
}

export const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    try {
        const formData = JSON.parse(event.body || '{}') as FormData;
        const isDevelopment = process.env.NODE_ENV === 'development';
        
        // Only verify Turnstile in production
        if (!isDevelopment) {
            const token = formData['cf-turnstile-response'];
            if (!token) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: 'Turnstile token required' })
                };
            }

            // Verify the Turnstile token
            const turnstileResult = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    secret: process.env.TURNSTILE_SECRET_KEY,
                    response: token,
                }),
            });

            const outcome = await turnstileResult.json();

            if (!outcome.success) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: 'Invalid Turnstile token' })
                };
            }
        }

        // Process project ranges
        const projectRanges = Object.entries(formData)
            .filter(([key]) => key.startsWith('project_range_'))
            .map(([key, value]) => ({
                range: key.replace('project_range_', ''),
                count: parseInt(value as string) || 0
            }));

        // Calculate portfolio metrics
        let totalPortfolioSize = 0;
        let totalMonthlyCost = 0;
        const PROJECT_VALUES = {
            "$0 - $100K": { value: 50000, price: 25 },
            "$100K - $500K": { value: 250000, price: 75 },
            "$500K - $5M": { value: 2500000, price: 75 },
            "$5M - $10M": { value: 7500000, price: 250 },
            "$10M - $50M": { value: 25000000, price: 250 },
            ">$50M": { value: 50000000, price: 250 }
        };

        projectRanges.forEach((range) => {
            const rangeConfig = PROJECT_VALUES[range.range as keyof typeof PROJECT_VALUES];
            if (rangeConfig) {
                totalPortfolioSize += range.count * rangeConfig.value;
                totalMonthlyCost += range.count * rangeConfig.price;
            }
        });

        const reworkCost = totalPortfolioSize * 0.05; // 5% of portfolio is rework
        const avoidableRework = reworkCost * 0.1419; // 14.19% of rework is avoidable

        // Initialize Supabase client
        const supabase = createClient(
            process.env.SUPABASE_URL || '',
            process.env.SUPABASE_ANON_KEY || ''
        );

        // Submit to Supabase
        const { error: supabaseError } = await supabase
            .from('contact_submissions')
            .insert([
                {
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    message: formData.message,
                    project_ranges: projectRanges,
                    portfolio_metrics: {
                        total_size: totalPortfolioSize,
                        monthly_cost: totalMonthlyCost,
                        potential_savings: avoidableRework
                    },
                    submitted_at: new Date().toISOString()
                }
            ]);

        if (supabaseError) {
            throw supabaseError;
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                message: 'Form submitted successfully',
                calculations: {
                    monthlyLicenseCost: totalMonthlyCost,
                    portfolioSize: totalPortfolioSize,
                    potentialSavings: avoidableRework
                }
            })
        };
    } catch (error) {
        console.error('Error processing form:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
}; 