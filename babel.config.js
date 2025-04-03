module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src/'],
          alias: {
            '@Core/*': './Core/*',
            '@Auth/*': './Auth/*',
            '@Task/*': './Task/*',
            '@Assets/*': './assets/*',
          },
        },
      ],
    ],
  };
};
