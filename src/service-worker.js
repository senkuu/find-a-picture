workbox.precaching.precacheAndRoute(self.__precacheManifest);

// Cache font-awesome stylesheets with a stale while revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/stackpath\.bootstrapcdn\.com\/font-awesome\/4.7.0\/css\/font-awesome.min.css/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "font-awesome-stylesheets"
  })
);
