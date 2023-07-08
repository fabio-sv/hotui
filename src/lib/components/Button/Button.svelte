<script lang="ts">
	import { theme, themeify } from '$lib/stores/theme.js';

	type ButtonTypes = 'button' | 'reset' | 'submit';

	export let href: string | undefined = undefined;
	export let type: ButtonTypes = 'button';

	$: buttonClass = themeify(
		'transition-all inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium outline-none',
		$theme.variant,
		$theme.mode
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
