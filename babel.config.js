module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@views" : "./src/pages",
            "@assets" : "./src/assets",
            "@services" : "./src/services/index.js",
            "@globalStyle" : "./global-style.js"
          }
        }
      ]
    ]
  };
};
