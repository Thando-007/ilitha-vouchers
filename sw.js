const CACHE = 'ilitha-v1';
const ASSETS = ['/ilitha-vouchers/', '/ilitha-vouchers/index.html', '/ilitha-vouchers/manifest.json', '/ilitha-vouchers/icons/icon-192.png', '/ilitha-vouchers/icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('/ilitha-vouchers/index.html')))
  );
});
