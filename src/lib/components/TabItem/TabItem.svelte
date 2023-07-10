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
		'transition-all w-full text-center p-2 font-medium rounded-md',
		open && 'bg-white shadow-md',
		!open && 'hover:bg-white/40',
		$theme.variant === 'blue' && 'text-blue-600',
		$theme.variant === 'green' && 'text-green-600',
		$theme.variant === 'orange' && 'text-orange-600',
		$theme.variant === 'pink' && 'text-pink-600',
		$theme.variant === 'purple' && 'text-purple-600',
		$theme.variant === 'red' && 'text-red-600',
		$theme.variant === 'yellow' && 'text-yellow-600'
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
