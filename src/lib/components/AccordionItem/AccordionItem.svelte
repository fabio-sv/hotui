<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import ArrowDown from 'svelte-icons-pack/fi/FiChevronDown.js';
	import { slide } from 'svelte/transition';

	// @ts-ignore
	import colors from 'tailwindcss/colors';
	import { theme, themeify } from '$lib/stores/theme.js';

	export let active: boolean = false;

	$: accordionClass = themeify(
		'flex justify-between items-center px-4 py-2 rounded-md font-medium outline-none',
		$theme.variant,
		$theme.mode
	);
</script>

<button
	class={accordionClass}
	on:click={() => (active = !active)}
	on:keydown={() => (active = !active)}
>
	<slot name="title" />

	<Icon src={ArrowDown} title="Down Arrow" color={colors[$theme.variant][700]} />
</button>

{#if active}
	<div class="py-2 px-5" transition:slide>
		<slot />
	</div>
{/if}
