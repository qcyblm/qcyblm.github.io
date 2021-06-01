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
    "revision": "d469573651c9a9befda56ef364e4ef9f"
  },
  {
    "url": "about.html",
    "revision": "29b04be760b1b193d5c6e2507795cb68"
  },
  {
    "url": "assets/css/0.styles.6eb90780.css",
    "revision": "31c58853f9e2b5765bd0154ecdf9a58d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c8e16cbd.js",
    "revision": "c10d0f56c362381610d325b4a1ca2ccf"
  },
  {
    "url": "assets/js/11.2c6e039f.js",
    "revision": "8c91ca746bf872dcd7abede1cd6e8278"
  },
  {
    "url": "assets/js/12.ffc71501.js",
    "revision": "365b1cbc7ce7f3d3b76081698c1af6d8"
  },
  {
    "url": "assets/js/13.0859daa0.js",
    "revision": "5c7660c8463b42f00a8f4ed0bb7874e1"
  },
  {
    "url": "assets/js/14.ce2eef4a.js",
    "revision": "4b64d675163de76e073466018a15a3e3"
  },
  {
    "url": "assets/js/15.2dcbfe9c.js",
    "revision": "c7a944d68fd1a8b4dfeb94d30bce2377"
  },
  {
    "url": "assets/js/16.77dd6531.js",
    "revision": "f530a62f51d0a4e6c4545d41d7f00eba"
  },
  {
    "url": "assets/js/17.f8c506af.js",
    "revision": "f4559517595c7ce5b77dfbfe90c6afa1"
  },
  {
    "url": "assets/js/2.2796d331.js",
    "revision": "6dc94db8f9ddd6f035785b5c41ece02d"
  },
  {
    "url": "assets/js/3.c4e503d5.js",
    "revision": "5f44d4dbe67ae5f1e61027e9efc0e56b"
  },
  {
    "url": "assets/js/4.12993193.js",
    "revision": "1db819fa21a477c31c85e69380bf5e68"
  },
  {
    "url": "assets/js/5.6c546958.js",
    "revision": "a6c62299796842a7d4c42b737b74af4b"
  },
  {
    "url": "assets/js/6.ebad59e9.js",
    "revision": "3df4b2871a4887c8f71f9d350de8a7d1"
  },
  {
    "url": "assets/js/7.efa6ffaa.js",
    "revision": "8b52ab44e554f459213ae03ad1b74c13"
  },
  {
    "url": "assets/js/8.dc0a321e.js",
    "revision": "935d9337aa5c12521db853113a8a5f49"
  },
  {
    "url": "assets/js/9.0487ced4.js",
    "revision": "3a5a04d0cf88ae71ec24da8dc1391473"
  },
  {
    "url": "assets/js/app.4faa48b3.js",
    "revision": "11d89a126d4dba0dece1a8e9512db242"
  },
  {
    "url": "book/book1.html",
    "revision": "8c7b565faf4c676821c8fb810465110b"
  },
  {
    "url": "book/book2.html",
    "revision": "87ad7c92870bd5148d7f9d6ad8c2179c"
  },
  {
    "url": "book/index.html",
    "revision": "9af5b95c2dc6f28e640909a9b606a475"
  },
  {
    "url": "friendlinks.html",
    "revision": "4e8c5390cff04805b1588ea5af3b34c1"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "4512809e5078e723c205d484269bfbb5"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "79e95e664fb8cffe0959bf571eb8e351"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "7552b2bdcc5603348ef2c1b9d4ddb47c"
  },
  {
    "url": "index.html",
    "revision": "648bb937cf2d17c293b842eee79590f7"
  },
  {
    "url": "nav.html",
    "revision": "893a57a61e788fdb4b92f5f964c3cb14"
  },
  {
    "url": "project.html",
    "revision": "a6e1af35f5f424a4292a83e3391bfad0"
  },
  {
    "url": "support.html",
    "revision": "917ca818036e567623215c5a6ea69d99"
  },
  {
    "url": "windows/software.html",
    "revision": "e28d710b6edb367391cc3547fcf1624b"
  },
  {
    "url": "windows/wepe.html",
    "revision": "878361ec1634292ce83ee51f67dee50a"
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
