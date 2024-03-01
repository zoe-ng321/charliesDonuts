export async function onRequest(context) {
  
  const resp = await context.next();

  let newResp = new Response(resp.body, {
    headers: resp.headers,
    status: resp.status
  })
  
  if (context.request.url.endsWith(".js")) {
    newResp.headers.set("Content-Type", "text/javascript");
  }
  return newResp;
}
