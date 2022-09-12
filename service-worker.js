/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f5fcd3b823ffe214504dea7afc9a3f92"
  },
  {
    "url": "admonitions.html",
    "revision": "260b91afb11d6b49d9609c29b9d44363"
  },
  {
    "url": "assets/css/0.styles.e0d530dc.css",
    "revision": "b1eb13af4b458eea6edc8cfb8353ffb3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a23af3a8.js",
    "revision": "04a42a363f43cd6aebe04736e533da2b"
  },
  {
    "url": "assets/js/11.b2d703f3.js",
    "revision": "a3981c710ccc0ed8ace486cd7521b5e1"
  },
  {
    "url": "assets/js/12.ae04cd26.js",
    "revision": "789edc2f869a719fee0b2735ac07bb8e"
  },
  {
    "url": "assets/js/13.faed05bf.js",
    "revision": "8a29dc2cb80606631fe0fab4e11aa0d0"
  },
  {
    "url": "assets/js/14.9d478cfe.js",
    "revision": "1a32ccf4d69aa8392d2dc305f0440466"
  },
  {
    "url": "assets/js/15.4b31ec66.js",
    "revision": "e8155082ac6c2f947846cf22b2b9a9ee"
  },
  {
    "url": "assets/js/16.714a65ca.js",
    "revision": "31139ebd1d29c96803646d9b7e63e2ce"
  },
  {
    "url": "assets/js/17.8fdca2da.js",
    "revision": "c9a1d7f2093654a5864c74e4ba4ca7b9"
  },
  {
    "url": "assets/js/18.c5fb9673.js",
    "revision": "c2c0e24d2d19f851564ef50cb09cc937"
  },
  {
    "url": "assets/js/19.4e1d73fa.js",
    "revision": "ea0594a5220027466acc31f67777e6cf"
  },
  {
    "url": "assets/js/2.c28a915b.js",
    "revision": "94af0b55e8f2bd22b05130bef5e9a7e4"
  },
  {
    "url": "assets/js/20.84eaf488.js",
    "revision": "2c61fa878d2c30acba449ed4807fdfa2"
  },
  {
    "url": "assets/js/21.26335423.js",
    "revision": "1cf98ebe193e87b057fa8781ca00526e"
  },
  {
    "url": "assets/js/22.93c0bff7.js",
    "revision": "650ee7cf0dc9702e0cdddf38b3c8a08f"
  },
  {
    "url": "assets/js/23.c54b04f4.js",
    "revision": "84a02bf32e8925e4f278f7d332ca8e33"
  },
  {
    "url": "assets/js/3.3628ad31.js",
    "revision": "fdb6d81c539a7827f0d0ed576dc97799"
  },
  {
    "url": "assets/js/4.77af4b95.js",
    "revision": "034f217a923c4e42c199d1d6c3357dd8"
  },
  {
    "url": "assets/js/5.5a2beed1.js",
    "revision": "ee99b5f6304d7a4f6fed50d10ce553dd"
  },
  {
    "url": "assets/js/6.729adef7.js",
    "revision": "cad02ff7ae0d3a22339bbe9090c21395"
  },
  {
    "url": "assets/js/7.b594a0fc.js",
    "revision": "edfa117b7360b80313252ae481d83917"
  },
  {
    "url": "assets/js/8.ef4d8d14.js",
    "revision": "b15dcd6a8b83fad1d10cbe6d2b4cf97e"
  },
  {
    "url": "assets/js/9.4b59b8f7.js",
    "revision": "edf150ea8eb4f1a5668fc311d24b42e0"
  },
  {
    "url": "assets/js/app.fa6cae45.js",
    "revision": "212d82f112bc17c385b031f3589e3399"
  },
  {
    "url": "basketball.html",
    "revision": "dda510a9540cf0d4733b9d913dc89e7c"
  },
  {
    "url": "charts-math.html",
    "revision": "7bcf7ff34783261107598ef56c43b82d"
  },
  {
    "url": "contact.html",
    "revision": "95812954192c5415c41f467a48335829"
  },
  {
    "url": "custom-components.html",
    "revision": "3efa7715fc8c5e33620772bbafd33750"
  },
  {
    "url": "diagrams.html",
    "revision": "e2351504e8d0305ae75861d97ebca424"
  },
  {
    "url": "index.html",
    "revision": "662d8d878299ff263a8b3853182c4b48"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
