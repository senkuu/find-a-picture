const filesToCache = ["/offline.html", "/main.js"];
const cacheName = "fap-cache";

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function(e) {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.open(cacheName).then(cache => {
        return cache.match("offline.html");
      });
    })
  );
});
