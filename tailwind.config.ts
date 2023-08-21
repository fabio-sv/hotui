import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{svelte,ts}'],
	theme: {
		extend: {
			maxWidth: {
				'95': '95%'
			},
			colors: {
				light: '#FAFAFA',
				svelte: '#ff3e00',
				tailwind: '#38bdf8'
			}
		}
	},
	plugins: []
} satisfies Config;
