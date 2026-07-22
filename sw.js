/* STUDIO · Je m'appelle Hương — service worker */
const CACHE = 'jmh-studio-v1';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/huong-ai.jpg',
  './icons/icon-brand-192.png',
  './icons/icon-brand-512.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Cache-first cho tài nguyên cùng nguồn; runtime-cache cho font & pdf.js
   để app vẫn chạy khi ngoại tuyến sau lần dùng đầu tiên. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const cacheable =
    url.origin === self.location.origin ||
    /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname) ||
    url.hostname === 'cdnjs.cloudflare.com';
  if (!cacheable) return;

  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => {
        if (req.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
