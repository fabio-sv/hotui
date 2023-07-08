<script lang="ts">
	let idx: number | undefined = undefined;
</script>

<div class="flex flex-col gap-y-2 shadow-md rounded-md bg-white p-4">
	<slot {idx} />
</div>
