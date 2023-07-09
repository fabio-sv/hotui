<script lang="ts">
	import { theme } from '$lib/stores';
	import { twMerge } from 'tailwind-merge';

	let selected = false;

	$: toggleClass = twMerge(
		'p-1 rounded-full w-14 shadow-md',
		$theme.variant === 'blue' && 'bg-blue-700',
		$theme.variant === 'red' && 'bg-red-700',
		$theme.variant === 'orange' && 'bg-orange-700',
		$theme.variant === 'green' && 'bg-green-700',
		$theme.variant === 'yellow' && 'bg-yellow-700',
		$theme.variant === 'purple' && 'bg-purple-700',
		$theme.variant === 'pink' && 'bg-pink-700',
		selected ? 'bg-opacity-60' : 'bg-opacity-30'
	);
</script>

<button class={toggleClass} on:click={() => (selected = !selected)}>
	<div class="transition-all rounded-full h-5 w-5 bg-white" class:translate-x-7={selected} />
</button>
