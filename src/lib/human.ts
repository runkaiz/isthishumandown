export default class Human {
	private handle: string
	private name: string
	private isDown: boolean
	private created: number
	private lastChecked: number

	constructor(human: {
		handle: string
		name?: string
		isDown?: boolean
		created?: number
		lastChecked?: number
	}) {
		this.handle = human.handle

		if (!human.created) {
			this.created = Date.now()
		} else {
			this.created = human.created
		}
		if (!human.name) {
			this.name = ''
		} else {
			this.name = human.name
		}
		if (!human.isDown) {
			this.isDown = false
		} else {
			this.isDown = human.isDown
		}
		if (!human.lastChecked) {
			this.lastChecked = Date.now()
		} else {
			this.lastChecked = human.lastChecked
		}
	}

	getHandle() {
		return this.handle
	}

	getName() {
		return this.name
	}

	getIsDown() {
		return this.isDown
	}

	getCreated() {
		return this.created
	}

	getLastChecked() {
		return this.lastChecked
	}

	justChecked() {
		this.lastChecked = Date.now()

		this.upload()
	}

	upload() {
		fetch('/api/transcend', {
			method: 'POST',
			body: JSON.stringify(this)
		})
	}
}
