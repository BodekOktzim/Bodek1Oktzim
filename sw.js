const CACHE_NAME = 'beitar-oktzim-v1';
// רשימת הקבצים שאנחנו רוצים לשמור בזיכרון של הטלפון
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

// הפעלה - ניקוי קבצים ישנים אם היו
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// שליפת נתונים - אם אין אינטרנט, קח מהזיכרון
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
