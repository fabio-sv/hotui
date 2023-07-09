<script lang="ts">
	import { theme, themeify } from '$lib/stores/theme.js';

	type ButtonTypes = 'button' | 'reset' | 'submit';

	export let href: string | undefined = undefined;
	export let type: ButtonTypes = 'button';
	export let grow = false;

	$: buttonClass = themeify(
		$theme.variant,
		$theme.mode,
		'transition-all inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium outline-none shadow-md',
		!grow && 'w-fit'
	);
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	type={href ? undefined : type}
	class={buttonClass}
	on:click
	on:keydown
	on:keyup
	on:keypress
	on:dblclick
>
	<slot />
</svelte:element>
