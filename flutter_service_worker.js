'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "da3fbc6f9fc1b4d7ca225ad04b6e6d3b",
"/": "da3fbc6f9fc1b4d7ca225ad04b6e6d3b",
"CNAME": "3db1bd9f0e1b8f55d2035e3acd069d2c",
"main.dart.js": "59f91af4376ed607cf401c4af7d51c42",
"favicon.png": "bf826f5093a0059843d2f82d2e102119",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.jpg": "2cf64e395df6782c34382046db02d46c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-512.jpg": "2cf64e395df6782c34382046db02d46c",
"manifest.json": "f4eeb2db3ba44577d49ded7d1c101257",
".git/config": "1c61a2ff74596e7cb5d1af573cfed52a",
".git/objects/pack/pack-d9a2da49f51369822f2c324c393d47802f20eae4.idx": "3b998f8c3fe1297c32ed26a0be4476a8",
".git/objects/pack/pack-d9a2da49f51369822f2c324c393d47802f20eae4.pack": "163249daf52bc51fac11633777b257a8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17df5235ce6b5fcbdd7502fee3eca952",
".git/logs/refs/heads/master": "17df5235ce6b5fcbdd7502fee3eca952",
".git/logs/refs/remotes/origin/HEAD": "17df5235ce6b5fcbdd7502fee3eca952",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "9f57aca1fad5ff96edd20b87f37a2315",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/index": "1432878c90246bcfc5bed4e87b7f190c",
".git/packed-refs": "eb2087875fcdf04a64658ee6d4aa5f73",
"assets/LICENSE": "e89dc9e0a305f739ef4421520a263cd4",
"assets/images/nav_return_white.png": "673d2eca79b7a4f9bb7d6d0078421896",
"assets/images/2.0x/nav_return_white.png": "1c540b85f37b68d79c4232fe2b87e84d",
"assets/images/3.0x/nav_return_white.png": "dc3e35c3289c72152aaf886010b564ca",
"assets/images/logo.jpg": "0ba1bc212fd6c9daf2398894d8820db2",
"assets/AssetManifest.json": "6b2293d5673005c9bc9d1fdbf7d011f2",
"assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/nav_return_white.png": "673d2eca79b7a4f9bb7d6d0078421896",
"assets/assets/images/2.0x/nav_return_white.png": "1c540b85f37b68d79c4232fe2b87e84d",
"assets/assets/images/3.0x/nav_return_white.png": "dc3e35c3289c72152aaf886010b564ca",
"assets/assets/images/logo.jpg": "0ba1bc212fd6c9daf2398894d8820db2",
"assets/assets/images/logo_prefix.jpg": "7ad1af62ace01622b7af291381bef16b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
