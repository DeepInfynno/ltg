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
    chunk2: "chunks/66-82e450fa4c2db47e",
    chunk3: "chunks/75-ff18ff5231a6fa6d",
    chunk4: "chunks/78e521c3-86db0426aefe18c6",
    chunk5: "chunks/95b64a6e-36a16ced23fc6065",
    chunk6: "w5JuUfKt3n1SA5oYHPUJY/_ssgManifest",
    chunk7: "w5JuUfKt3n1SA5oYHPUJY/_buildManifest",
    chunk8: "chunks/940-506b20688fd5fbb4",
    chunk9: "chunks/d64684d8-7146a3aabc4c3ae3",
    chunk10: "chunks/d0447323-31f2538ffd315461",
  },
});

requirejs(["js/main"]);
