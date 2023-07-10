<script lang="ts">
	import { theme } from '$lib/stores';
	import { twMerge } from 'tailwind-merge';

	let idx: number | undefined = undefined;

	$: accordionClass = twMerge(
		'flex flex-col gap-y-2 shadow-md rounded-lg bg-white p-4',
		$theme.mode === 'dark' && 'bg-gray-800 text-white'
	);
</script>

<div class={accordionClass}>
	<slot {idx} />
</div>
