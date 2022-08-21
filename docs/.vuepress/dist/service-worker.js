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
    "revision": "aa8ceeb04cc3aeb9d524c0565b17b197"
  },
  {
    "url": "admonitions.html",
    "revision": "e54bd1abe1df83c8e7d8d33f13461a7d"
  },
  {
    "url": "assets/css/0.styles.e42427c6.css",
    "revision": "b7dee9352cabb3a99bb57f67cce36ed1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.757a4bb7.js",
    "revision": "e0006c1719ceb57b5e385b110d519079"
  },
  {
    "url": "assets/js/11.8ac1f6f1.js",
    "revision": "272cfcde9b8588b10b70e628500c6733"
  },
  {
    "url": "assets/js/12.09caf0cc.js",
    "revision": "0d4667eec2d4627b5c666a6627fddedc"
  },
  {
    "url": "assets/js/13.ed8af7a7.js",
    "revision": "d5552adc1d39c3a925b65583195261dc"
  },
  {
    "url": "assets/js/14.21258299.js",
    "revision": "346ccdceec81b5e8c77c506f9ee36ea6"
  },
  {
    "url": "assets/js/15.d6e6f416.js",
    "revision": "9efda02b21c54ba66dda84d873898968"
  },
  {
    "url": "assets/js/16.d3d48900.js",
    "revision": "a7e1aaf31a68d810883fda364fb9ebba"
  },
  {
    "url": "assets/js/17.e180b63a.js",
    "revision": "5aa79b90b801b45a93c8e70c37fb5bf9"
  },
  {
    "url": "assets/js/18.7c1a9567.js",
    "revision": "7ea507361f6eee822cdcac8124a29871"
  },
  {
    "url": "assets/js/19.1aecde09.js",
    "revision": "db7148660b4aeedfb8091a478eda9d1e"
  },
  {
    "url": "assets/js/2.e76806ae.js",
    "revision": "c67e8b3c237e1e87f9dd3b6ecd4779ef"
  },
  {
    "url": "assets/js/20.234ba2e3.js",
    "revision": "09981a744349e2fa518ee508f7dfc44a"
  },
  {
    "url": "assets/js/21.b667dad4.js",
    "revision": "c40787e34773c34934fc00542a7faa4a"
  },
  {
    "url": "assets/js/22.a6eb6bdd.js",
    "revision": "0025980ecb50a7c6d2f5045ad64a6ce5"
  },
  {
    "url": "assets/js/23.e948a77d.js",
    "revision": "7b596fc02cfb162120f9b0b5fd28cc09"
  },
  {
    "url": "assets/js/3.f70f04ef.js",
    "revision": "ea8bff687c3da66784aacba8d5a1dcef"
  },
  {
    "url": "assets/js/4.f3b93ae1.js",
    "revision": "f7fb74a147ef5e262d02a48d22d64a92"
  },
  {
    "url": "assets/js/5.5ff696f8.js",
    "revision": "b781e2288fdfac12af0dda775dfdb06a"
  },
  {
    "url": "assets/js/6.062c7655.js",
    "revision": "8fd054049d970988047619c8cf730eaa"
  },
  {
    "url": "assets/js/7.99b2fb6a.js",
    "revision": "aa341cd715bd2a52c061628f97a65ccb"
  },
  {
    "url": "assets/js/8.fe7fbd39.js",
    "revision": "9cc23516294a89ce59059400de4f57c7"
  },
  {
    "url": "assets/js/9.11190d82.js",
    "revision": "72db4355aa5bb3abebb51fb08f141847"
  },
  {
    "url": "assets/js/app.0410fb8c.js",
    "revision": "22e85ebecae276320f70ab388a1455c8"
  },
  {
    "url": "basketball.html",
    "revision": "92e4e75ff0e43019f384beb2541b1480"
  },
  {
    "url": "charts-math.html",
    "revision": "280ef4196b4d796c39effb20c4fcd637"
  },
  {
    "url": "contact.html",
    "revision": "65d14e7973d51ffe391bba743b84e321"
  },
  {
    "url": "custom-components.html",
    "revision": "ce9f01c2afef96b6a0499ea1cc3b3f19"
  },
  {
    "url": "diagrams.html",
    "revision": "fd92e970a735cee6fa01da9dd9871ce5"
  },
  {
    "url": "index.html",
    "revision": "8f3abdec638e12bec16a95d74ff2070c"
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
