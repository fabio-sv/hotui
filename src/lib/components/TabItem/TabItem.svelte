<script lang="ts">
	import { getContext } from 'svelte';
	import { TAB_KEY, type TabsContextType } from '../Tabs/Tabs.svelte';

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
</script>

<li role="presentation">
	<button
		type="button"
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
