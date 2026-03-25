const CACHE_NAME = 'vokabel-trainer-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './lists/vokabeln.csv' // Hier fügen wir deine Liste hinzu!
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
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});