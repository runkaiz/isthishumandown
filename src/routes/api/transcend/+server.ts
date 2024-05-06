import { KV_REST_API_TOKEN, KV_REST_API_URL } from '$env/static/private'
import { createClient } from '@vercel/kv'
import type { RequestHandler } from './$types'
import { json } from '@sveltejs/kit'

export const POST: RequestHandler = async ({ request }) => {
	try {
		const kv = createClient({
			url: KV_REST_API_URL,
			token: KV_REST_API_TOKEN
		})

		const human = await request.json()

		await kv.json.set(human.handle, '$', JSON.stringify(human))

		return json({ success: true })
	} catch (e) {
		throw new Error('Human failed to transcend!')
	}
}
