const Repack = require('@callstack/repack');

module.exports = {
  output: {
    uniqueName: 'bookstore',
  },
  plugins: [
    new Repack.plugins.ModuleFederationPluginV2({
      name: 'bookstore',
      filename: 'bookstore.container.bundle',
      exposes: {
        // './App': './src/components/BookContent',
        './App': './App',

      },
      shared: {
        react: { singleton: true, eager: true },
        'react-native': { singleton: true, eager: true },
      },
    }),
  ],
};