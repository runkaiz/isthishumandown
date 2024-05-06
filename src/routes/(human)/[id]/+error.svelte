<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
</script>

<div role="alert" class="alert">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		class="stroke-info shrink-0 w-6 h-6"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		></path></svg
	>
	<span
		>Oh no! It seems like the human you are looking for doesn't exist. What a shame, fix this
		situation by creating them yourself!</span
	>
	<div>
		<button class="btn btn-sm btn-primary" on:click={() => goto('/create')}>Sure?</button>
	</div>
</div>
<div role="alert" class="alert alert-error">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="stroke-current shrink-0 h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
	<span>Error! {$page.error?.message}</span>
</div>
<div class="flex flex-col w-full lg:flex-row">
	<div class="mockup-code">
		<pre data-prefix="1"><code>{'{'}</code></pre>
		<pre data-prefix="2"><code>{`   request: {`}</code></pre>
		<pre data-prefix="3" class="bg-warning text-warning-content"><code
				>{`       path: ${$page.url.pathname}`}</code
			></pre>
		<pre data-prefix="4"><code>{`   }`}</code></pre>
		<pre data-prefix="5"><code>{'}'}</code></pre>
	</div>
	<div class="divider lg:divider-horizontal">></div>
	<div class="mockup-code">
		<pre data-prefix="1"><code>{'{'}</code></pre>
		<pre data-prefix="2"><code>{`   response: {`}</code></pre>
		<pre data-prefix="3" class="bg-warning text-warning-content"><code
				>{`       human: NULL`}</code
			></pre>
		<pre data-prefix="4"><code>{`   }`}</code></pre>
		<pre data-prefix="5"><code>{'}'}</code></pre>
	</div>
</div>
