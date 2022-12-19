requirejs.config({
  baseUrl: "/_next/static/",
  paths: {
    app: "../app",
    polyfills: "chunks/polyfills-c67a75d1b6f99dc8",
    webpack: "chunks/webpack-ee7e63bc15b31913",
    "chunk-main": "chunks/main-b6ae7f85f00af153",
    framework: "chunks/framework-3b5a00d5d7e8d93b",
    "page-app": "chunks/pages/_app-a1d62d50ed05516a",
    chunk1: "chunks/1bfc9850-41488c1cce563500",
    chunk2: "chunks/d64684d8-7146a3aabc4c3ae3",
    chunk3: "chunks/973-45b4b325c85ee4be",
    chunk4: "chunks/655-b165e467088e77d2",
    chunk5: "chunks/314-963035ecab6f62ba",
    chunk6: "KlTPcvsb0nc4FJpxHrCVv/_ssgManifest",
    chunk7: "KlTPcvsb0nc4FJpxHrCVv/_buildManifest",
    chunk8: "chunks/d0447323-31f2538ffd315461",
    chunk9: "chunks/95b64a6e-36a16ced23fc6065",
    chunk10: "chunks/78e521c3-86db0426aefe18c6",
    chunk11: "chunks/490-99c7a64e9e4b4c7f",
  },
});

requirejs(["js/main"]);
