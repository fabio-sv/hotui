<script>
	import '../app.css';

	import { theme } from '$lib/stores/theme';
</script>

<main class="h-screen overflow-none flex w-full">
	<aside class="h-full w-fit border-r-2 px-4 py-8">
		<a href="/components/buttons" class="text-base font-medium underline">Button</a>
		<a href="/components/accordions" class="text-base font-medium underline">Accordion</a>
		<a href="/components/toggles" class="text-base font-medium underline">Toggle</a>
	</aside>

	<section class="w-full p-16 flex flex-col from-fuchsia-500 to-purple-600 bg-gradient-to-r">
		<slot />
	</section>

	<aside class="flex flex-col w-80 h-full bg-white border-l-2 p-4">
		<h4 class="text-2xl pt-4">Theme</h4>

		<label for="theme">
			<input name="theme" type="radio" bind:group={$theme.mode} value="dark" />
			Dark mode
		</label>

		<label for="theme">
			<input name="theme" type="radio" bind:group={$theme.mode} value="light" />
			Light mode
		</label>

		<h4 class="text-2xl pt-4">Variant</h4>

		<label for="variant">
			<input name="variant" type="radio" bind:group={$theme.variant} value="blue" />
			Blue
		</label>
		<label for="variant">
			<input name="variant" type="radio" bind:group={$theme.variant} value="red" />
			Red
		</label>

		<label for="variant">
			<input name="variant" type="radio" bind:group={$theme.variant} value="orange" />
			Orange
		</label>
		<label for="variant">
			<input name="variant" type="radio" bind:group={$theme.variant} value="green" />
			Green
		</label>
		<label for="variant">
			<input name="variant" type="radio" bind:group={$theme.variant} value="yellow" />
			Yellow
		</label>
		<label for="variant">
			<input name="variant" type="radio" bind:group={$theme.variant} value="purple" />
			Purple
		</label>
		<label for="variant">
			<input name="variant" type="radio" bind:group={$theme.variant} value="pink" />
			Pink
		</label>
	</aside>
</main>
