'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c07402b549a1e6a446eba5bc2903564e",
"index.html": "2fc0e35a8b20482f36de7a4927850d39",
"/": "2fc0e35a8b20482f36de7a4927850d39",
"main.dart.js": "bff73fc4e70b8d98280653d711dd7544",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "48b193e2a8faa58456bbe4edca2af8d6",
"assets/AssetManifest.json": "c4b010ee930c3bb52f0f47d7424e44ee",
"assets/NOTICES": "7f3359bd29f7ec16d93b3918c62d7f50",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/new_im_animations/assets/stamp.jpeg": "2e8629bcc63453ad8097a1e3a5226df0",
"assets/packages/new_im_animations/assets/avatars/man.png": "6cb616c880ca291582ab569d443f9cc6",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/instagram.svg": "e7449d3dd1eea545fdefecfad43f7223",
"assets/assets/svg/mail.svg": "71bdf87ff430cc2d9973c51ab3e90edc",
"assets/assets/svg/facebook.svg": "a0d54e7c84c4a100c7460b0b250c497a",
"assets/assets/svg/youtube.svg": "f59d477bc4ea342a0f6de57e73d024e3",
"assets/assets/svg/phone.svg": "eaaa23066e41364c6f180adb1d67d099",
"assets/assets/svg/location.svg": "bd7b88a4baef7b0f202ae4e3e7798bb7",
"assets/assets/svg/tik-tok.svg": "7af642cc46c3d7fda35b90506d1824a3",
"assets/assets/images/download.jpeg": "e9b3fa214c2f5bbd056cfe7bb4ba0482",
"assets/assets/images/2022-05-31%252015.37.05.jpg": "79e3ab31ecaf723e0dc14b64dda19dec",
"assets/assets/images/lg_24_led.jpeg": "3a1a35f8dee8ab758a357f1584190f8f",
"assets/assets/images/lg_UItraFine_24.jpeg": "6660762862438cf893082efb7677ef5d",
"assets/assets/images/1C13E78E-64CB-4CEC-A150-155FC01A7A8C__98525.webp": "62b51c9a540c27adb5fba5bef480af90",
"assets/assets/images/makbook_pro_2020.jpeg": "46c6918823fb303ee65658dd96c1fc4b",
"assets/assets/images/wire_less_mouse_puora.jpeg": "d766ef657b8370153369b522d3130339",
"assets/assets/images/2022-05-31%252015.38.44.jpg": "aea45a208dbf707bc878813cb1ddb6df",
"assets/assets/images/dell3501-black.jpeg": "e03b9cb76604f9fb1e65de68ed3e17ee",
"assets/assets/images/asus_due_ux85.jpeg": "90b48e81d73413c59a5d98c9ef5ec378",
"assets/assets/images/mirrer_case.jpeg": "f3e6d17e0a04b427491e64fd1748678f",
"assets/assets/images/urban_case.jpeg": "68476b3caa75e779474cb8ae042cbc06",
"assets/assets/images/901w_ihub.jpeg": "2cf3165c00b85bb54afd44892547e057",
"assets/assets/images/2022-06-01%252014.17.46.jpg": "6a6b69e17a3fcf4d9eba0594e77fe154",
"assets/assets/images/intiate-ecommerce-website-brand.gif": "ae62a1b7f4aedaf5f881dde3cd007e8b",
"assets/assets/images/giphy.gif": "a3bd00d7fe5257e36cd5de6501a3423f",
"assets/assets/images/dell_7in1-adapter.jpeg": "a9e6f92dbb70685ffb631e5d4c7ecf16",
"assets/assets/images/air_case.jpeg": "7dc3a75c030f199e1f26a83e26358fa9",
"assets/assets/images/logo.png": "f592777b93104c1749ced19d273ca99d",
"assets/assets/images/2022-05-31%252015.38.07.jpg": "c07babe0af66b9d60560daf294d05cf7",
"assets/assets/images/msi_9sexr-250.jpeg": "16f2e802b1a10f6ca2e06ff9ca4f840f",
"assets/assets/images/dp_alt_mode.jpeg": "1e3c3764ad5573892a4a809a24296c1f",
"assets/assets/images/hp_27f_4k.webp": "3e22f1e8e164c33c09d1fc20192fefec",
"assets/assets/images/fast-gif.gif": "7437836d53fd7c4847c3dbf030cef53a",
"assets/assets/images/hdmi_to_use_c.jpeg": "2cfd000766ad58289012643de2dd03a9",
"assets/assets/images/Email-Marketing-2-Gif-1.gif": "3115b7090a6a007b5a3b91668c7e1892",
"assets/assets/images/surfase.jpeg": "0c846f38ac75f92f22990e77fe596b7e",
"assets/assets/images/wikipedia.jpeg": "a282d1ce6aebad743280ffd22860645e",
"assets/assets/images/public.gif": "c4439a63940953da9da7e4dc3687a5f0",
"assets/assets/images/2022-05-31%252015.41.16.jpg": "7afe458eb1ff6fd42c9c1634acf66d58",
"assets/assets/images/magic_mouse.jpeg": "9aa280526ac1b429ce8f348dfeb1115c",
"assets/assets/images/virtually-present-ppc-1.gif": "6cd4ea7d5ae744f8ec7599a3ec4dbf40",
"assets/assets/icons/1C13E78E-64CB-4CEC-A150-155FC01A7A8C__98525.webp": "62b51c9a540c27adb5fba5bef480af90",
"assets/assets/icons/ads.gif": "6e64af30735b782c2ea207f20a4d005a",
"assets/assets/icons/about_us2.gif": "51ced1ca835521237877e5380a94c554",
"assets/assets/icons/about_us.gif": "a61a2c9c0dd5ebb74c4276204dc7fa06",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
