<script lang="ts">
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/AccordionItem/AccordionItem.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Radio from '$lib/components/Radio/Radio.svelte';
	import TabItem from '$lib/components/TabItem/TabItem.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import Toggle from '$lib/components/Toggle/Toggle.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IconSvelte from 'svelte-icons-pack/si/SiSvelte';
	import IconTailwind from 'svelte-icons-pack/si/SiTailwindcss';

	let radioValue: string = 'opt1';
</script>

<!-- 
	<div class="bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-md shadow-lg">
		<div class="flex w-full justify-end shadow-md p-2">
			<button
				class="px-4 py-2 text-white bg-transparent focus:bg-black/20 rounded-md text-sm font-medium"
			>
				Preview
			</button>
			<button
				class="px-4 py-2 text-white bg-transparent focus:bg-black/20 rounded-md text-sm font-medium"
			>
				Code
			</button>
		</div>

		<div class="flex flex-col items-center justify-center w-full h-full px-4 py-8">
		</div>
	</div>
 -->

<Button>Got it, thanks!</Button>

<Accordion>
	<AccordionItem>
		<p slot="title">What is your refund policy?</p>
		<p>
			If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund
			you in full, no questions asked.
		</p>
	</AccordionItem>

	<AccordionItem>
		<p slot="title">Do you offer technical support?</p>
		<p>No.</p>
	</AccordionItem>
</Accordion>

<Toggle />

<form class="space-y-2">
	<Radio name="options" value="opt1" bind:group={radioValue} let:selected>
		<div>
			<p class="text-base">Startup</p>
			<p class="text-sm font-normal">12GB/6 CPUs - 160 GB SSD Disk</p>
		</div>
	</Radio>
	<Radio name="options" value="opt2" bind:group={radioValue} let:selected>
		<div>
			<p class="text-base">Business</p>
			<p class="text-sm font-normal">16GB/8 CPUs - 512 GB SSD Disk</p>
		</div>
	</Radio>
</form>

<Tabs>
	<TabItem open>
		<p slot="trigger">Recent</p>

		<div class="p-4 hover:bg-gray-100/40 rounded-md">
			<p class="font-medium text-sm">Does drinking coffee make you smarter?</p>
			<p class="text-xs opacity-50">5h ago . 5 comments . 2 shares</p>
		</div>

		<div class="p-4 hover:bg-gray-100/40 rounded-md">
			<p class="font-medium text-sm">So you've bought coffee... now what?</p>
			<p class="text-xs opacity-50">5h ago . 5 comments . 2 shares</p>
		</div>
	</TabItem>

	<TabItem>
		<p slot="trigger">Second</p>

		<p
			class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 text-center text-3xl font-bold leading-loose drop-shadow-md"
		>
			Whatever you want goes here!
		</p>
	</TabItem>

	<TabItem>
		<p slot="trigger">Third</p>

		<div class="flex gap-x-4 justify-center items-center text-2xl">
			<Icon src={IconSvelte} title="Svelte" color="#ff3e00" size="3rem" />
			<p>+</p>
			<Icon src={IconTailwind} title="Tailwind" color="#38bdf8" size="3rem" />
		</div>
	</TabItem>
</Tabs>
