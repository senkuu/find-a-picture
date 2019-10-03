importScripts("precache-manifest.99d899613bc01377c45bfe977a69c2bc.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest);

// Cache font-awesome stylesheets with a stale while revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/stackpath\.bootstrapcdn\.com\/font-awesome\/4.7.0\/css\/font-awesome.min.css/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "font-awesome-stylesheets"
  })
);

