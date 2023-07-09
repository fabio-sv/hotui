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
</script>

<ul>
	<slot />
</ul>

<div role="tabpanel" aria-labelledby="id-tab" use:init />
