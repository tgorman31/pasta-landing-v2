import type { Handler } from '@netlify/functions';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  'cf-turnstile-response': string;
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
    const token = formData['cf-turnstile-response'];

    // Verify the Turnstile token
    const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const outcome = await result.json();

    if (!outcome.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid Turnstile token' })
      };
    }

    // Process the form data (you can add your own logic here)
    console.log('Form submission:', formData);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' })
    };
  } catch (error) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}; 