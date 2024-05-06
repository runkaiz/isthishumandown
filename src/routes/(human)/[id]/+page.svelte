<script lang="ts">
	import type { PageServerData } from './$types.js'
	import Human from '$lib/human'
	import { onMount } from 'svelte'

	export let data: PageServerData
	$: human = new Human(data.human)

	let createdTimestamp = true
	let lastCheckedTimestamp = true

	onMount(() => {
		human.justChecked()
	})
</script>

<div class="mockup-code">
	<pre data-prefix="1"><code>name: {human.getName()}</code></pre>
	<pre data-prefix="2"><code>handle: @{human.getHandle()}</code></pre>
	<pre data-prefix="3" class={human.getIsDown() ? 'text-warning' : 'text-success'}><code
			>isDown: {human.getIsDown()}</code
		></pre>
	<pre data-prefix="4"><button on:click={() => (createdTimestamp = !createdTimestamp)}
			>created: {createdTimestamp
				? human.getCreated()
				: new Date(human.getCreated()).toDateString()}</button
		></pre>
	<pre data-prefix="5"><button on:click={() => (lastCheckedTimestamp = !lastCheckedTimestamp)}
			>lastChecked: {lastCheckedTimestamp
				? human.getLastChecked()
				: new Date(human.getLastChecked()).toDateString()}</button
		></pre>
</div>
