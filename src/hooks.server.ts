import { KV_REST_API_TOKEN, KV_REST_API_URL } from '$env/static/private'
import { createClient } from '@vercel/kv'

import Human from '$lib/human'

try {
	const kv = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	})

	const adam = new Human({ handle: 'adam', name: 'Adam', isDown: true })
	const payload = JSON.stringify(adam)

	kv.json.set('adam', '$', payload)
} catch (e) {
	console.error(e)
}
