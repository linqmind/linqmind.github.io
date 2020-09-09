'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "da3fbc6f9fc1b4d7ca225ad04b6e6d3b",
"/": "da3fbc6f9fc1b4d7ca225ad04b6e6d3b",
"CNAME": "3db1bd9f0e1b8f55d2035e3acd069d2c",
"main.dart.js": "62833f3045f6b7fbecf0d3b2c182eeee",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f4eeb2db3ba44577d49ded7d1c101257",
".git/ORIG_HEAD": "04acfb234b16471e6d5cbf2a8132b36b",
".git/config": "28d54527d0dcb8a64caa7d09074669d2",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/68/332bea85d34ef2ff1d8f2fea5445dd910b300c": "a58219ffede170fa4719d60c20dd2f84",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/67/7655c77e7c948e6ad4683c7e787c8e9f5be0b1": "66c74788e992cb1a81e27e784d482499",
".git/objects/a2/a4e9e448d098d7115fd883a4cb71d4eae8ba85": "f8daebb4a3e96b16c96c9178b744c092",
".git/objects/c7/080c462ee275ddc85e4f89c805b390305d1c85": "76e65badc1742c281387d487e5bfb5b6",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/e3/6ee5f6c217354594a627910b33e2df11029745": "2aa545ccff6cb5c1e33e567d719f984b",
".git/objects/fb/e91cb208e2c367265ac3ad31bd8516ec88c609": "8576c3d877ce8c031026448c28f312b9",
".git/objects/ed/a431181dcc98173714b17afbaae6dbeb12160b": "6d58f698fb2d83e8587944bb94299b56",
".git/objects/20/7874cd6e6a05234a5dfa193656a2e53b3efe6b": "fcaf8241bc1a5533631294799fc970f9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/81bcf822620c5a2d4b51e217277084114dfd31": "f571a57af81579c5d856bc748bc44766",
".git/objects/11/f005e1a9e96c822257660bf0924da1acdc1528": "88509f2b6fdfdaf6fe2f29e3ca0bcf30",
".git/objects/8f/517700fc6661902e2ad5e805b91cdeb26b0bb2": "bfd94e9fdc9916fb0af1604eae4fdbc0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/be412afef82b04b6069deed1639b093fd5feba": "40d71ca81ce5abed3bb09f08d131d8a7",
".git/objects/19/a1967397c4063c8d90579833d680771c0f0c35": "cff691dc6b23c623d34035caedb4c619",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/98c55c146ac88e689cc2eabe11f9ca6cd87668": "9862fa9a65f60fbf918133176241a1b6",
".git/objects/3a/46edda19e1dadd3404cf646a273c239845ccc9": "13b37a08434fbec895d1dea403ecc134",
".git/objects/53/4cea3cad2698c74078fc08f7a5480b2108df59": "dd281ce39b98ceaf1d9a2ad55d0c7055",
".git/objects/6c/f1a905edd82f50d8d30dc4df61fa034f0b7376": "20fb2c86766bbbb40ac58a5000e86e37",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0a/416af4fef86b37bb124ff1881a194a5e4b3d49": "11b78d774a512fc869ccad9f3b30cc7b",
".git/objects/90/9c79b384f1b83d081a42a7da46bb37c1a5d523": "8c4bd77ee48ee12712e98532845b5166",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/c364b21b40d6a519026bfb8a6777aeec9ac369": "72585aa9bc1a55481319a15151c6ac00",
".git/objects/a1/96476c3cdaa6ae872fe716287798c83ffac423": "1e5ac1782e67cb81f764bc06a50d176c",
".git/objects/ef/65d857dcffd6435935cb0fbf4a721f69edda56": "9aec1bfdb38af6169003e509c16dcd53",
".git/objects/ce/67b9cd4c367883c58c5a83744f6678fcdd52da": "9de2386d71faa0a38ff03c65cb2bb254",
".git/objects/41/814f7f2400a3994b5a187653c094de4e89108a": "c32a8b9a55f74b22043945625b786914",
".git/objects/15/d9093e86d5afc6afd31a1aff5b2789276b60ea": "efa8c46b795e3510fad439b332f15a96",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/8b/23bf8fe04f038acc82b5e9d9356ae5bd0fad7c": "46d785009bd33f7287f433b94cb147b5",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "58925c8238f167670bf1a8035b6581c4",
".git/logs/refs/heads/master": "58925c8238f167670bf1a8035b6581c4",
".git/logs/refs/remotes/origin/master": "226459326717b33c5f32b0c16877b951",
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
".git/refs/heads/master": "ab182e577a97b716e4dbf29ec995eaf2",
".git/refs/remotes/origin/master": "ab182e577a97b716e4dbf29ec995eaf2",
".git/index": "e5cd5111321ad86cc217f21c56611e39",
".git/COMMIT_EDITMSG": "99b9b579ef88768f0c606e0576f1be34",
".git/FETCH_HEAD": "a9d034772665c4f679e368e680da3ac7",
".git/sourcetreeconfig": "1d8e27bc5c288a11ddf329508063c76e",
"assets/LICENSE": "784bb0352c2b8772c995179cf6e48828",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
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
