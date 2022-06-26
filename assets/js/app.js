// Creating the first service worker
// Verifying the browser has support for service workers
if ("serviceWorker" in navigator) {
  // Registering a service worker. Takes two arguments: the URL of the service worker script and an optional options object.
  navigator.serviceWorker
    .register("/offlineServiceWorker.js")
    .then(function (registration) {
      console.log("Service Worker registered with scope: ", registration.scope);
    })
    .catch(function (error) {
      console.log("Service worker registeration failed: ", error);
    });
} else {
  console.log("The browser doesn't support service workers.");
}
