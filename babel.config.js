module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          alias: {
            "@components": ["./src/components"],
            "@routes": ["./src/routes"],
            "@views": ["./src/views"],
            "@hooks": ["./src/hooks"],
            "@customTypes": ["./src/types"],
            "@utils": ["./src/utils"],
          },
        },
      ],
    ],
  };
};
