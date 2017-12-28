<template>
	<f7-page>
		<f7-navbar title="About" back-link="Back" sliding></f7-navbar>
		<f7-accordion>
			<!-- Item 1 -->
			<f7-accordion-item>
				<f7-accordion-toggle>Item 1</f7-accordion-toggle>
				<f7-accordion-content>
					Item 1 content...
				</f7-accordion-content>
			</f7-accordion-item>
			<!-- Item 2 -->
			<f7-accordion-item>
				<f7-accordion-toggle>Item 2</f7-accordion-toggle>
				<f7-accordion-content>
					Item 2 content...
				</f7-accordion-content>
			</f7-accordion-item>
		</f7-accordion>

		<!-- Single collapsible element -->
		<f7-accordion-item>
			<f7-accordion-toggle>Item 1</f7-accordion-toggle>
			<f7-accordion-content>
				Item 1 content...
			</f7-accordion-content>
		</f7-accordion-item>

		<!-- Another separate collapsible element -->
		<f7-accordion-item>
			<f7-accordion-toggle>Item 2</f7-accordion-toggle>
			<f7-accordion-content>
				Item 2 content...
			</f7-accordion-content>
		</f7-accordion-item>
	</f7-page>
</template>

<script>
	export default {}
</script>