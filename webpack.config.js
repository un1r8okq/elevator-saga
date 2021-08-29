module.exports = {
  mode: 'development',
  entry: './src/init.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      }
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'init.js',
  },
};
