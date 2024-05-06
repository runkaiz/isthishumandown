import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { KV_REST_API_TOKEN, KV_REST_API_URL } from '$env/static/private'
import { createClient } from '@vercel/kv'

export const load: PageServerLoad = async ({ params }) => {
	try {
		const kv = createClient({
			url: KV_REST_API_URL,
			token: KV_REST_API_TOKEN
		})
		const human = await kv.json.get(params.id)

		if (!human) {
			throw new Error('Human not found!')
		}

		return { human }
	} catch (e) {
		error(404, 'Human not found!')
	}
}
