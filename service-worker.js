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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1e581d1b1006b5ccad61a975df9f760c"
  },
  {
    "url": "assets/css/0.styles.9611ce91.css",
    "revision": "2a8d2025cec6e9d6bab8395b41e97c43"
  },
  {
    "url": "assets/img/denzel-react.ea9d8933.jpg",
    "revision": "ea9d8933c830c55b1c411909b39a7a32"
  },
  {
    "url": "assets/img/javascript.61ed8b05.svg",
    "revision": "61ed8b054178d0e8d1285ad8f29f4045"
  },
  {
    "url": "assets/img/mocha-output.93c74096.png",
    "revision": "93c740968cf5d92fad662ea6e9615ef8"
  },
  {
    "url": "assets/img/react.4009eef3.svg",
    "revision": "4009eef3b3e291f296e71962c70895c5"
  },
  {
    "url": "assets/img/redux.aa0a3376.svg",
    "revision": "aa0a337603611296524a666b62a9ff23"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1beb0a6d.js",
    "revision": "e6aa4450e6af6afd8b087e9cc039107f"
  },
  {
    "url": "assets/js/11.2127b566.js",
    "revision": "7ac4f67f2cb71744d59046846daa861d"
  },
  {
    "url": "assets/js/12.dacfbc12.js",
    "revision": "1086b9e88acdd1dbdc94508dffdd5824"
  },
  {
    "url": "assets/js/13.bb931c24.js",
    "revision": "e879903809a3110b5a559dd7c98b87c9"
  },
  {
    "url": "assets/js/14.9a561fc3.js",
    "revision": "5a84417cccec240216aeca03bd5a5ab8"
  },
  {
    "url": "assets/js/15.e33dacd3.js",
    "revision": "706cc876e0a9515fef14a5b3640579c5"
  },
  {
    "url": "assets/js/16.2340cb16.js",
    "revision": "38084364151fdea2e685336a3746bdcf"
  },
  {
    "url": "assets/js/17.bb734bc3.js",
    "revision": "a069a14050f08a4e48f6e664ba12ecc5"
  },
  {
    "url": "assets/js/18.28f77630.js",
    "revision": "87ef1376dc5032e614af865a357ff49b"
  },
  {
    "url": "assets/js/19.e0ee8262.js",
    "revision": "52ccc06d41e3331f9d69c20fd0647943"
  },
  {
    "url": "assets/js/2.861402b7.js",
    "revision": "2ff2705e890b878913a9dfcd10aada51"
  },
  {
    "url": "assets/js/20.2c7096c5.js",
    "revision": "a41d391d8f1b6f4adf952b069d5dee7e"
  },
  {
    "url": "assets/js/21.e743cc0e.js",
    "revision": "8fc5c8651cb633c1f9689ee108d0c104"
  },
  {
    "url": "assets/js/22.9ba274f1.js",
    "revision": "cb98a905c390773ad48e88fe2cff8a94"
  },
  {
    "url": "assets/js/23.41eef8b5.js",
    "revision": "c22bc70067372ccdf041acb5a98448ac"
  },
  {
    "url": "assets/js/24.3af925d8.js",
    "revision": "33aa263ab79c213e65a29154565bdd7e"
  },
  {
    "url": "assets/js/25.b0083107.js",
    "revision": "a1ee25f53862236a17862e41af4efa38"
  },
  {
    "url": "assets/js/26.9979bdc6.js",
    "revision": "5096012136afb329e37f1ab0d40c0b97"
  },
  {
    "url": "assets/js/27.0e1681b8.js",
    "revision": "24800676b8efab97bcf8660b36c6db15"
  },
  {
    "url": "assets/js/3.33f134f5.js",
    "revision": "f18eec82de69264844ff869e54f6073e"
  },
  {
    "url": "assets/js/4.03db1896.js",
    "revision": "d571733e23e75b000bd516b5dcfcd167"
  },
  {
    "url": "assets/js/5.3ba0d247.js",
    "revision": "d1181bb4a5d9e1874c314c45052e9214"
  },
  {
    "url": "assets/js/6.7deeed88.js",
    "revision": "6e539cbd753f6f67a2452c6cdf931bde"
  },
  {
    "url": "assets/js/7.f6911785.js",
    "revision": "107e12797e1883ae6a6e2227c578541d"
  },
  {
    "url": "assets/js/8.6011c2a9.js",
    "revision": "a26367fde5fa594ad9be42bf28b490f1"
  },
  {
    "url": "assets/js/9.f3d9562e.js",
    "revision": "ac0554925479b320c6970f9a3bd3673a"
  },
  {
    "url": "assets/js/app.93208c86.js",
    "revision": "1f19e431bcc0c838f76487a41927e314"
  },
  {
    "url": "assignments/index.html",
    "revision": "b35354493c57a1db74d1aa8ab65ab9b1"
  },
  {
    "url": "HeadshotPlaceholder.png",
    "revision": "dd905cc985945c4b067ad8e177bbefe0"
  },
  {
    "url": "hero.png",
    "revision": "a77ff0e74d076093d400c27e493f4974"
  },
  {
    "url": "index.html",
    "revision": "7da0eb00618cc52336da11dae6fa16f6"
  },
  {
    "url": "instructor-notes.html",
    "revision": "0003fbeaf475eba1155e0fc42fe29d80"
  },
  {
    "url": "modules/index.html",
    "revision": "bcc8564a12f47d802d59596c3a10c322"
  },
  {
    "url": "modules/week1/index.html",
    "revision": "eb93e33b80d608fa93cc1020383adbb4"
  },
  {
    "url": "modules/week10/index.html",
    "revision": "010caf76f22b22d74b6e049ef9ee3f63"
  },
  {
    "url": "modules/week11/index.html",
    "revision": "ab71f1f37a759c0d5c5b91c51af7e2c7"
  },
  {
    "url": "modules/week12/index.html",
    "revision": "abc5452d239987fdeb6aca3fe3b0b1c1"
  },
  {
    "url": "modules/week13/index.html",
    "revision": "524f7681c1e3e0371d51d73782547899"
  },
  {
    "url": "modules/week14/index.html",
    "revision": "d93eddb01bd104953adc8705ed1f21ea"
  },
  {
    "url": "modules/week2/index.html",
    "revision": "a8ea163bbc076ad8ef2f3941d81589ec"
  },
  {
    "url": "modules/week3/index.html",
    "revision": "21749222fd33589057f0943b656def4f"
  },
  {
    "url": "modules/week4/index.html",
    "revision": "767aa81f90a502da3451afe7be96602b"
  },
  {
    "url": "modules/week5/index.html",
    "revision": "3e54e4d5520781f5edf7ef7882f83a80"
  },
  {
    "url": "modules/week6/index.html",
    "revision": "d4177f69d19b3500dc02f30f881b77fb"
  },
  {
    "url": "modules/week6/mocha.html",
    "revision": "cfa13f73d4b7bc5e8fb039509e32c9a6"
  },
  {
    "url": "modules/week7/index.html",
    "revision": "3aebeb28fe5be1bfd04aa423b3411bf8"
  },
  {
    "url": "modules/week8/index.html",
    "revision": "05b3446ad806f28a207053277a5f2609"
  },
  {
    "url": "modules/week9/index.html",
    "revision": "9fb7a99fe03f5e4e74dada20f4e468f3"
  },
  {
    "url": "overview/contacts.html",
    "revision": "69b948957f2d5c6926ca6745b77b49f9"
  },
  {
    "url": "overview/course-section-information.html",
    "revision": "9fd1a42f7d196018c213ef8cfa55b3c1"
  },
  {
    "url": "overview/index.html",
    "revision": "43a16a0864a1b016607d3f7eb2277169"
  },
  {
    "url": "resources/index.html",
    "revision": "f36f036f913f1e1ca4694aec34ba5fbc"
  },
  {
    "url": "steve-griffith.jpeg",
    "revision": "3fb81c0d91a190afe01fd27de65080f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
