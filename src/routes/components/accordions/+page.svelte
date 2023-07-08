<script lang="ts">
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/AccordionItem/AccordionItem.svelte';
</script>

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
