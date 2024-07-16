A service worker is a script that your browser runs in the background, separate from a web page, and can intercept network requests, cache or retrieve resources, and manage background synchronization. It's a key component of Progressive Web Apps (PWAs) and enables features like offline functionality, push notifications, and more. Here's how a service worker works in detail, along with an example:

### How Service Worker Works:

1. **Registration**:
   - First, you need to register a service worker script in your web application. This is typically done in your main JavaScript file (e.g., `app.js`) or directly in your HTML file. Here’s how you register a service worker:

     ```javascript
     if ('serviceWorker' in navigator) {
       navigator.serviceWorker.register('/sw.js')
         .then(registration => {
           console.log('Service Worker registered:', registration);
         })
         .catch(error => {
           console.error('Service Worker registration failed:', error);
         });
     }
     ```

     In this example, `/sw.js` is the path to your service worker script.

2. **Installation and Activation**:
   - When a service worker is registered for the first time or when it has changed, the browser will install and activate it. During the installation phase (`sw.js`), you can cache necessary assets for offline use.

     ```javascript
     // Inside sw.js

     const cacheName = 'my-cache-v1';
     const filesToCache = [
       '/',
       '/index.html',
       '/styles/main.css',
       '/scripts/main.js'
     ];

     self.addEventListener('install', event => {
       event.waitUntil(
         caches.open(cacheName)
           .then(cache => {
             return cache.addAll(filesToCache);
           })
       );
     });
     ```

     Here, `caches.open()` creates a new cache storage, and `cache.addAll()` caches the specified files.

3. **Intercepting Fetch Requests**:
   - Once activated, the service worker can intercept network requests using the `fetch` event. This allows you to serve cached responses or fetch them from the network as needed.

     ```javascript
     // Inside sw.js

     self.addEventListener('fetch', event => {
       event.respondWith(
         caches.match(event.request)
           .then(response => {
             // Cache hit - return response
             if (response) {
               return response;
             }

             // Clone the request to make a fetch
             let fetchRequest = event.request.clone();

             return fetch(fetchRequest).then(
               response => {
                 // Check if we received a valid response
                 if (!response || response.status !== 200 || response.type !== 'basic') {
                   return response;
                 }

                 // Clone the response to put in the cache
                 let responseToCache = response.clone();

                 caches.open(cacheName)
                   .then(cache => {
                     cache.put(event.request, responseToCache);
                   });

                 return response;
               }
             );
           })
       );
     });
     ```

     In this example, `event.respondWith()` allows you to return a response immediately from the cache, or fetch it from the network and then cache it for future use.

4. **Handling Push Notifications and Background Sync**:
   - Service workers also enable features like push notifications and background synchronization. You can listen for events such as `push` or `sync` to handle these functionalities.

     ```javascript
     // Inside sw.js

     self.addEventListener('push', event => {
       const options = {
         body: event.data.text(),
         icon: '/images/icon.png',
         badge: '/images/badge.png'
       };

       event.waitUntil(
         self.registration.showNotification('Push Notification', options)
       );
     });

     self.addEventListener('sync', event => {
       if (event.tag === 'syncData') {
         event.waitUntil(syncData());
       }
     });

     function syncData() {
       // Perform background synchronization tasks
     }
     ```

### Example Scenario:
Consider a news app that uses a service worker to provide offline access to previously fetched articles. When a user opens the app, the service worker caches the main app shell (HTML, CSS, JS), and upon subsequent visits, it serves these cached files if the network is unavailable. When new articles are fetched, they are cached for offline reading. Push notifications can also be sent to notify users of new articles.

In summary, a service worker enhances web applications by providing offline capabilities, efficient caching strategies, and enabling features like push notifications and background synchronization. It runs separately from the main thread of your web application, allowing it to handle tasks in the background and improve user experience significantly.