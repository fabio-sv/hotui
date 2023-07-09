import { writable } from 'svelte/store';
import { twMerge } from 'tailwind-merge';

type Mode = 'light' | 'dark';
type Variant = 'blue' | 'red' | 'orange' | 'green' | 'yellow' | 'purple' | 'pink';

type Theme = {
	mode: Mode;
	variant: Variant;
};

const theme = writable<Theme>({
	mode: 'light',
	variant: 'purple'
});

type ClassNameType = string | null | undefined | 0 | false

const themeify = (variant: Variant, mode: Mode, ...classNames: ClassNameType[] ) => {
	return twMerge(
		...classNames,
		variant === 'blue' && 'bg-blue-100 hover:bg-blue-200 text-blue-700',
		variant === 'red' && 'bg-red-100 hover:bg-red-200 text-red-700',
		variant === 'orange' && ' bg-orange-100 hover:bg-orange-200 text-orange-700',
		variant === 'green' && 'bg-green-100 hover:bg-green-200 text-green-700',
		variant === 'yellow' && 'bg-yellow-100 hover:bg-yellow-200 text-yellow-700',
		variant === 'purple' && 'bg-purple-100 hover:bg-purple-200 text-purple-700',
		variant === 'pink' && 'bg-pink-100 hover:bg-pink-200 text-pink-700'
	);
};

export { theme, themeify };
