<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let selected = false;

	$: buttonClass = twMerge('p-1 rounded-full w-20', selected ? 'bg-gray-600/70' : 'bg-gray-600/50');
</script>

<button class={buttonClass} on:click={() => (selected = !selected)}>
	<div class="transition-all rounded-full h-8 w-8 bg-white" class:translate-x-10={selected} />
</button>
