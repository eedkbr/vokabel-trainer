const CACHE_NAME = 'vokabel-trainer-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './lists/spanisch.csv' // Hier fügen wir deine Liste hinzu!
];

// 1. Installation: Dateien in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. Abfangen: Wenn kein Netz da ist, aus dem Cache laden

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});