// Service Worker standar untuk syarat PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Biarkan aplikasi mengambil data secara online langsung ke PrintPro
});
