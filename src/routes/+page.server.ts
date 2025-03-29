import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private';
import type { Actions } from './$types';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        
        try {
            // Initialize Supabase client only when needed
            const supabase = createClient(
                SUPABASE_URL,
                SUPABASE_ANON_KEY
            );

            const { error: supabaseError } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        name: data.get('name'),
                        email: data.get('email'),
                        company: data.get('company'),
                        message: data.get('message'),
                        submitted_at: new Date().toISOString()
                    }
                ]);

            if (supabaseError) throw supabaseError;

            return { success: true };
        } catch (error) {
            console.error('Error submitting form:', error);
            return {
                success: false,
                error: 'Failed to submit form'
            };
        }
    }
} satisfies Actions; 