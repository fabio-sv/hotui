import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{svelte,ts}'],
	theme: {
		extend: {
			maxWidth: {
				'95': '95%'
			},
			colors: {
				light: '#FAFAFA'
			}
		}
	},
	plugins: []
} satisfies Config;
