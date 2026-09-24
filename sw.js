self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Mantém os pedidos da rede sem bloquear
  e.respondWith(fetch(e.request).catch(() => new Response("Off-line")));
});
