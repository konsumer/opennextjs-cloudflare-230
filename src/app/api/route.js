import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function GET(req){
  const ctx = await getCloudflareContext()
  return new Response(JSON.stringify(Object.keys(ctx), null, 2), { headers: { 'content-type': 'text/json' } })
}