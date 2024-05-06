<script lang="ts">
	import '../app.css'

	import { query } from '$lib/stores'
	import { goto } from '$app/navigation'
	import type { LayoutServerData } from './$types.js'

	let is_command_down = false
	let is_k_down = false

	function onBind() {
		document.querySelector('input')?.focus()
	}

	function onUnbind() {
		document.querySelector('input')?.blur()
	}

	function onKeyDown(event: KeyboardEvent) {
		if (event.repeat) return

		switch (event.key) {
			case 'Meta':
				is_command_down = true

				event.preventDefault()
				break
			case 'k':
				is_k_down = true

				event.preventDefault()
				break
			case 'Enter':
				event.preventDefault()
				goto(`/${$query}`)
				break
		}

		if (is_command_down && is_k_down) {
			onBind()
		}
	}

	function onKeyUp(event: KeyboardEvent) {
		if (event.repeat) return

		switch (event.key) {
			case 'Escape':
				event.preventDefault()
				onUnbind()

				break
		}
	}

	export let data: LayoutServerData
</script>

<svelte:window on:keydown={onKeyDown} on:keyup={onKeyUp} />

<main class="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
	<h1 class="text-5xl font-bold mb-4">isthishumandown</h1>
	<p class="text-2xl mb-8">
		Humans created: <span class="font-bold">{data.numberOfHumans}</span>
	</p>
	<div class="w-full max-w-md">
		<label class="input input-bordered flex items-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-4 h-4 opacity-70"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
				/>
			</svg>
			<input
				type="text"
				class="grow"
				placeholder="Look up or create a human"
				bind:value={$query}
			/>
			<kbd class="kbd kbd-sm">⌘</kbd>
			<kbd class="kbd kbd-sm">K</kbd>
		</label>
	</div>

	<div class="p-8 space-y-4 w-4/5 lg:w-1/2">
		<slot />
	</div>
</main>
