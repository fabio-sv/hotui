<script lang="ts">
	import { theme } from '$lib/stores';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IconTick from 'svelte-icons-pack/fi/FiCheck';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	export let name: string;
	export let value: string;
	export let group: string;

	$: className = twMerge(
		'transition-all flex justify-between items-center w-full text-left p-4 font-medium rounded-md shadow-md bg-white',
		$theme.variant === 'blue' &&
			"[&:has(input[type='radio']:checked)]:bg-blue-200 [&:has(input[type='radio']:checked)]:text-blue-600",
		$theme.variant === 'red' &&
			"[&:has(input[type='radio']:checked)]:bg-red-200 [&:has(input[type='radio']:checked)]:text-red-600",
		$theme.variant === 'orange' &&
			"[&:has(input[type='radio']:checked)]:bg-orange-200 [&:has(input[type='radio']:checked)]:text-orange-600",
		$theme.variant === 'green' &&
			"[&:has(input[type='radio']:checked)]:bg-green-200 [&:has(input[type='radio']:checked)]:text-green-600",
		$theme.variant === 'yellow' &&
			"[&:has(input[type='radio']:checked)]:bg-yellow-100 [&:has(input[type='radio']:checked)]:text-yellow-700",
		$theme.variant === 'purple' &&
			"[&:has(input[type='radio']:checked)]:bg-purple-200 [&:has(input[type='radio']:checked)]:text-purple-600",
		$theme.variant === 'pink' &&
			"[&:has(input[type='radio']:checked)]:bg-pink-200 [&:has(input[type='radio']:checked)]:text-pink-600"
	);

	$: tickClass = twMerge(
		'rounded-full p-1',
		$theme.variant === 'blue' && 'bg-blue-600',
		$theme.variant === 'red' && 'bg-red-600',
		$theme.variant === 'orange' && 'bg-orange-600',
		$theme.variant === 'green' && 'bg-green-600',
		$theme.variant === 'yellow' && 'bg-yellow-600',
		$theme.variant === 'purple' && 'bg-purple-600',
		$theme.variant === 'pink' && 'bg-pink-600'
	);

	$: selected = group === value;
</script>

<label class={className} for={value}>
	<input bind:group type="radio" {name} {value} id={value} class="appearance-none hidden" />

	<div>
		<slot {selected} />
	</div>

	{#if selected}
		<div transition:fade={{ duration: 150 }} class={tickClass}>
			<Icon src={IconTick} title="Tick" color="white" />
		</div>
	{/if}
</label>
