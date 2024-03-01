export async function onRequest(context) {
  try {
    let resp = await fetch(context.request.url, context.request);
  
    let newResp = new Response(resp.body, {
      headers: resp.headers,
      status: resp.status
    })
  
    if (context.request.url.endsWith(".js")) {
      newResp.headers.set("Content-Type", "text/javascript");
    }
    return newResp;

  } catch (err) {
    return new Response(`${err.message}\n${err.stack}`, { status: 500 });
  }
}
