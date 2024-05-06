<script lang="ts">
	import { onMount } from 'svelte'
	import { query } from '$lib/stores'

	let newHandle = ''
	let isDown = false

	onMount(() => {
		newHandle = $query
		$query = ''
	})
</script>

<label class="input input-bordered flex items-center gap-2">
	Name
	<input type="text" class="grow" placeholder="Johnny Appleseed" />
	<span class="badge badge-info">Optional</span>
</label>
<label class="input input-bordered flex items-center gap-2">
	Handle
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
	<input type="text" class="grow" placeholder="Jappleseed" />
</label>

<div class="form-control">
	<div class="label">
		<div class="flex items-center space-x-1">
			<span class="label-text select-text">Down Right Now?</span>
			<div
				class="tooltip"
				data-tip={'When a human is asleep, they are considered "down" for maintenance.'}
			>
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
						d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
					/>
				</svg>
			</div>
		</div>

		<input type="checkbox" class="toggle toggle-primary" bind:checked={isDown} />
	</div>
</div>
<button class="btn btn-primary float-right">Create</button>
