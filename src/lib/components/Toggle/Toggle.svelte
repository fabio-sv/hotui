<script lang="ts">
	import { theme } from '$lib/stores';
	import { twMerge } from 'tailwind-merge';

	let selected = false;

	$: toggleClass = twMerge(
		'p-1 rounded-full w-14 shadow-md',
		selected && $theme.variant === 'blue' && 'bg-blue-300',
		selected && $theme.variant === 'red' && 'bg-red-300',
		selected && $theme.variant === 'orange' && 'bg-orange-300',
		selected && $theme.variant === 'green' && 'bg-green-300',
		selected && $theme.variant === 'yellow' && 'bg-yellow-300',
		selected && $theme.variant === 'purple' && 'bg-purple-300',
		selected && $theme.variant === 'pink' && 'bg-pink-300',
		!selected && $theme.variant === 'blue' && 'bg-blue-100',
		!selected && $theme.variant === 'red' && 'bg-red-100',
		!selected && $theme.variant === 'orange' && 'bg-orange-100',
		!selected && $theme.variant === 'green' && 'bg-green-100',
		!selected && $theme.variant === 'yellow' && 'bg-yellow-100',
		!selected && $theme.variant === 'purple' && 'bg-purple-100',
		!selected && $theme.variant === 'pink' && 'bg-pink-100'
	);

	$: ballClass = twMerge(
		'transition-all rounded-full h-5 w-5 bg-white',
		$theme.variant === 'blue' && 'bg-blue-700',
		$theme.variant === 'red' && 'bg-red-700',
		$theme.variant === 'orange' && 'bg-orange-700',
		$theme.variant === 'green' && 'bg-green-700',
		$theme.variant === 'yellow' && 'bg-yellow-700',
		$theme.variant === 'purple' && 'bg-purple-700',
		$theme.variant === 'pink' && 'bg-pink-700',
		selected && 'translate-x-7'
	);
</script>

<button class={toggleClass} on:click={() => (selected = !selected)}>
	<div class={ballClass} />
</button>
