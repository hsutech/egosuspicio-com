// This withdrawn route must not fall through to a previously cached static article.
export function onRequest({ request }) {
  return new Response(request.method === 'HEAD' ? null : 'Esta publicación se ha retirado.', {
    status: 410,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex',
    },
  });
}
