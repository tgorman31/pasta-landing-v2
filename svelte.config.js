import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: dev ? '' : '/pasta-landing-v2'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore all 404s
				if (message.includes('404')) {
					return;
				}
				// otherwise fail the build
				throw new Error(message);
			}
		}
	}
};

export default config;
