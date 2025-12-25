const CACHE_NAME = "kinap-cafeteria-v2";
const FILES_TO_CACHE = [
  "index.html",
  "cart.html",
  "style.css",
  "app.js",
  "manifest.json"
  "icons/icon-176png"
  "icons/icon-367.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});