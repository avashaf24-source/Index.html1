self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("khonamon-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "logo-blue.png"
      ]);
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
