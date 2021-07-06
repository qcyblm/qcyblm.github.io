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
    "revision": "1d24b806456a24472713eba47e5fcffb"
  },
  {
    "url": "about.html",
    "revision": "7eee4444c8a4c17d19ccc95f997054f9"
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
    "url": "assets/js/10.8709c318.js",
    "revision": "8f5c95ddc418d43e55740568d94aa709"
  },
  {
    "url": "assets/js/11.aa7c3be1.js",
    "revision": "06271c9e63f1727c8705a40ef7b6f89b"
  },
  {
    "url": "assets/js/12.7aa851b0.js",
    "revision": "8154b03a4c3ff620608d68189560c8e5"
  },
  {
    "url": "assets/js/13.564ccb61.js",
    "revision": "bffd04823faed3f937b845448d770db5"
  },
  {
    "url": "assets/js/14.b78e26e1.js",
    "revision": "3bdb368b4c898ce715678abf1c54828f"
  },
  {
    "url": "assets/js/15.bfbac243.js",
    "revision": "1744014d85768ef974beb325a0681ee2"
  },
  {
    "url": "assets/js/16.d2f64ab3.js",
    "revision": "0eef234148b0dc5a0c133a4b16280825"
  },
  {
    "url": "assets/js/17.5e7e4798.js",
    "revision": "667a9ba775cfb33d24a2b2a5b9c0ce90"
  },
  {
    "url": "assets/js/2.28b7666a.js",
    "revision": "34ba5faa1ff5b80b63b8899b1ce2cde7"
  },
  {
    "url": "assets/js/3.8053f874.js",
    "revision": "989dfb5df5fd682d0a24c276f2bde8d6"
  },
  {
    "url": "assets/js/4.82313a1f.js",
    "revision": "7548555ebbfc9bb80e20eedfd49ef20f"
  },
  {
    "url": "assets/js/5.c97888ed.js",
    "revision": "6e7fed93c4b94e43f1d4cfb93b62cb26"
  },
  {
    "url": "assets/js/6.64be7433.js",
    "revision": "a289102c085ea9e0d39cb6c272146f54"
  },
  {
    "url": "assets/js/7.7b7f0d2d.js",
    "revision": "25e868cdd1ac22a2594948d3c874620c"
  },
  {
    "url": "assets/js/8.4af1e588.js",
    "revision": "2f4584de75cbc4a30f87def88a2321ba"
  },
  {
    "url": "assets/js/9.995a1f8b.js",
    "revision": "2bba5c995579f8084d7aff81a661b878"
  },
  {
    "url": "assets/js/app.801f2177.js",
    "revision": "4d5378e16d4a2297ae2b2c200c5fddb0"
  },
  {
    "url": "book/book1.html",
    "revision": "47dc9e9f6b18dec330426cf722702bab"
  },
  {
    "url": "book/book2.html",
    "revision": "b3f59de3770c00db4cb05a54093ac3a9"
  },
  {
    "url": "book/index.html",
    "revision": "a6d2c628732dad28acd4f6e2579f97c9"
  },
  {
    "url": "friendlinks.html",
    "revision": "603c4953c31ef94a67b3d7aec83d72f7"
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
    "revision": "acd591fbb71c9cc96d134321cd80ad9b"
  },
  {
    "url": "nav.html",
    "revision": "2cc4a901cfe8f1a5d209f9ff76a4d6f1"
  },
  {
    "url": "project.html",
    "revision": "69bca6bbcad866f90abe470d4573c957"
  },
  {
    "url": "support.html",
    "revision": "5fbd86ba529e1624b4020fd99591f397"
  },
  {
    "url": "windows/software.html",
    "revision": "116b73f83eab9490d0a9576409054846"
  },
  {
    "url": "windows/wepe.html",
    "revision": "69956fc40ef6fa9768b895c103460959"
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
