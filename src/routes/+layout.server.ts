import type { LayoutServerLoad } from './$types'
import { KV_REST_API_URL, KV_REST_API_TOKEN } from '$env/static/private'

export const load: LayoutServerLoad = async () => {
	return {
		numberOfHumans: await fetch(`${KV_REST_API_URL}/info/keyspace`, {
			headers: {
				Authorization: `Bearer ${KV_REST_API_TOKEN}`
			}
		})
			.then((response) => response.json())
			.then((data) => {
				const match = /(?:keys=)([0-9]+)/.exec(data.result)
				return match ? match[1] : null
			})
	}
}
