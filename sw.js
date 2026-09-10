const CACHE_NAME = 'beitar-oktzim-v2'; // <--- שונה ל-v2
const assets = [
  './index.html',
  './Bodek1Oktzim.png',
  './manifest.json'
];

// התקנה - שומר את הקבצים ב-Cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching assets...');
      return cache.addAll(assets);
    })
  );
  self.skipWaiting();
});

// הפעלה - מוחק את ה-v1 הישן ומפעיל את v2
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// שליפת נתונים - מנסה קודם מהרשת (Network First). אם אין אינטרנט, מציג מה-Cache
self.addEventListener('fetch', e => {
  // בודק רק בקשות GET של הקבצים שלנו
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(networkResponse => {
        // אם הצליח להוריד מהאינטרנט - עדכן את ה-Cache ברקע והחזר את התשובה העדכנית
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(e.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // אם אין אינטרנט - קח מה-Cache
        return caches.match(e.request);
      })
  );
});
