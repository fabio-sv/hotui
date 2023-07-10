<script lang="ts">
	import { getContext } from 'svelte';
	import { TAB_KEY, type TabsContextType } from '../Tabs/Tabs.svelte';
	import { twMerge } from 'tailwind-merge';
	import { theme } from '$lib/stores';
	import { fade, fly, slide } from 'svelte/transition';

	export let open: boolean = false;

	const { selected } = getContext<TabsContextType>(TAB_KEY) ?? {};

	function init(node: HTMLElement) {
		selected.set(node);

		const destroy = selected.subscribe((x) => {
			if (x !== node) {
				open = false;
			}
		});

		return { destroy };
	}

	$: buttonClass = twMerge(
		'transition-all w-full text-center p-2 font-medium rounded-md text-black',
		$theme.mode === 'dark' && 'text-white',
		!open && $theme.variant === 'blue' && 'hover:bg-blue-100 hover:text-blue-700',
		!open && $theme.variant === 'red' && 'hover:bg-red-100 hover:text-red-700',
		!open && $theme.variant === 'orange' && 'hover:bg-orange-100 hover:text-orange-700',
		!open && $theme.variant === 'green' && 'hover:bg-green-100 hover:text-green-700',
		!open && $theme.variant === 'yellow' && 'hover:bg-yellow-100 hover:text-yellow-700',
		!open && $theme.variant === 'purple' && 'hover:bg-purple-100 hover:text-purple-700',
		!open && $theme.variant === 'pink' && 'hover:bg-pink-100 hover:text-pink-700',
		open && $theme.variant === 'blue' && 'hover:bg-blue-100 text-blue-700',
		open && $theme.variant === 'red' && 'hover:bg-red-100 text-red-700',
		open && $theme.variant === 'orange' && ' bg-orange-200 text-orange-700',
		open && $theme.variant === 'green' && 'bg-green-200 text-green-700',
		open && $theme.variant === 'yellow' && 'bg-yellow-200 text-yellow-700',
		open && $theme.variant === 'purple' && 'bg-purple-200 text-purple-700',
		open && $theme.variant === 'pink' && 'bg-pink-200 text-pink-700'
	);
</script>

<li role="presentation" class="w-1/3 rounded-md" class:bg-white={open} class:shadow-md={open}>
	<button
		type="button"
		class={buttonClass}
		on:click={() => (open = true)}
		on:blur
		on:click
		on:contextmenu
		on:focus
		on:keydown
		on:keypress
		on:keyup
		on:mouseenter
		on:mouseleave
		on:mouseover
		role="tab"
	>
		<slot name="trigger" />
	</button>

	{#if open}
		<div class="hidden tab_content_placeholder">
			<div use:init>
				<slot />
			</div>
		</div>
	{/if}
</li>
