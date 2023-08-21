<script>
	import Button from '$lib/components/Button/Button.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IconGithub from 'svelte-icons-pack/si/SiGithub';
</script>

<main class="min-h-screen flex flex-col justify-center items-center font-medium p-4 text-center">
	<nav class="absolute top-0 hidden sm:flex p-8 justify-between w-full border-b shadow-md">
		<img src="/logo.png" alt="Hot UI logo" class="w-20 drop-shadow-md" />

		<div class="flex gap-x-2">
			<a
				href=""
				class="rounded-md hover:bg-gray-100/50 transition-all hover:text-orange-600 px-4 p-1"
				>Get started</a
			>
			<a
				href=""
				class="rounded-md hover:bg-gray-100/50 transition-all hover:text-orange-600 px-4 p-1"
				>Docs</a
			>

			<a href="" class="rounded-full transition-all hover:text-orange-600 p-1"
				><Icon src={IconGithub} title="Github" size="1.5rem" /></a
			>
		</div>
	</nav>

	<img
		src="/logo.png"
		alt="Hot UI logo"
		class="w-1/2 sm:w-[24.8rem] sm:h-24 mb-[-0.6rem] sm:mb-[-1.2rem] drop-shadow-md"
	/>
	<h1
		class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 text-6xl sm:text-9xl drop-shadow-md font-extrabold mb-6"
	>
		Hot UI
	</h1>

	<p class="text-gray-700 text-base sm:text-2xl font-medium">
		Opinionated <strong class="text-svelte text-2xl sm:text-2xl">Svelte</strong>

		component library built with
		<strong class="text-tailwind text-2xl sm:text-2xl">Tailwind</strong>
	</p>

	<div class="flex gap-x-2 mx-2 mt-8">
		<Button>Get started</Button>
		<Button>Docs</Button>
	</div>
</main>
