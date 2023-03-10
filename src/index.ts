import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

addEventListener("fetch", (event: any) => {
    event.respondWith(handleEvent(event));
});

async function handleEvent(event: any) {
    console.log("Version 0.8")
    try {
        // Add logic to decide whether to serve an asset or run your original Worker code
        return await getAssetFromKV(event);
    } catch (e) {
        let pathname = new URL(event.request.url).pathname;
        return new Response(`"${pathname}" not found`, {
            status: 404,
            statusText: "not found",
        });
    }
}
