// ServiceWorker : https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ja
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service_worker.js').then(function (registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function (err) {
        console.log('ServiceWorker registration failed: ', err);
    });
}

// ピンチイン禁止
document.documentElement.addEventListener('touchstart', function (e) {
    if (e.touches.length >= 2) { e.preventDefault(); }
}, { passive: false });

// ダブルタップでズーム禁止
let t = 0;
document.documentElement.addEventListener('touchend', function (e) {
    let now = new Date().getTime();
    if ((now - t) < 350) {
        e.preventDefault();
    }
    t = now;
}, false);

/** 
 * OnLoad
 */
document.addEventListener('DOMContentLoaded', () => {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}, false);