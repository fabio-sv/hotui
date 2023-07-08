import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
			maxWidth: {
				'95': '95%'
			}
		},
  },
  plugins: [],
} satisfies Config

