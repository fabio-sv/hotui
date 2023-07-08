<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	type ButtonVariants = 'blue' | 'red' | 'orange' | 'green' | 'yellow' | 'purple' | 'pink';
	type ButtonTypes = 'button' | 'reset' | 'submit';

	export let variant: ButtonVariants = 'blue';
	export let href: string | undefined = undefined;
	export let type: ButtonTypes = 'button';

	const buttonClass = twMerge(
		'transition-all inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium outline-none',
		variant === 'blue' && 'bg-blue-100 hover:bg-blue-200 text-blue-700',
		variant === 'red' && 'bg-red-100 hover:bg-red-200 text-red-700',
		variant === 'orange' && ' bg-orange-100 hover:bg-orange-200 text-orange-700',
		variant === 'green' && 'bg-green-100 hover:bg-green-200 text-green-700',
		variant === 'yellow' && 'bg-yellow-100 hover:bg-yellow-200 text-yellow-700',
		variant === 'purple' && 'bg-purple-100 hover:bg-purple-200 text-purple-700',
		variant === 'pink' && 'bg-pink-100 hover:bg-pink-200 text-pink-700'
	);
</script>

<svelte:element this={href ? 'a' : 'button'} type={href ? undefined : type} class={buttonClass}>
	<slot />
</svelte:element>
