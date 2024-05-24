self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Put your install step here
});

self.addEventListener('activate', event => {
    console.log('Service worker activated.');
    // Put your activate step here
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    // Put your code for caching assets or pages here
});
