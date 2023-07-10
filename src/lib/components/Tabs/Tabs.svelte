<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { v4 } from 'uuid';

	export interface TabsContextType {
		selected: Writable<HTMLElement>;
	}

	export const TAB_KEY = v4();
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { theme } from '$lib/stores';

	const ctx: TabsContextType = {
		selected: writable<HTMLElement>()
	};

	setContext(TAB_KEY, ctx);

	function init(node: HTMLElement) {
		const destroy = ctx.selected.subscribe((element: HTMLElement) => {
			if (element) {
				node.replaceChildren(element);
			}
		});

		return { destroy };
	}

	$: ulClass = twMerge(
		'flex w-full gap-x-1 bg-white text-black rounded-lg p-1 shadow-md',
		$theme.mode === 'dark' && 'bg-gray-800 text-white'
	);

	$: contentClass = twMerge(
		'mt-2 rounded-lg p-4 shadow-md bg-white text-black',
		$theme.mode === 'dark' && 'bg-gray-800 text-white'
	);
</script>

<section>
	<ul class={ulClass}>
		<slot />
	</ul>

	<div role="tabpanel" aria-labelledby="id-tab" class={contentClass} use:init />
</section>
