// webpack.config.js
const path = require('path');
const webpack = require('webpack'); // Import webpack module

module.exports = {
  mode: 'production',
  entry: './src/Megamenu.js', // Path to your component entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'Megamenu.bundle.js', // Output filename
    library: 'Megamenu', // Name of the library
    libraryTarget: 'umd', // Output module format
    umdNamedDefine: true, // Define the module's name for AMD
    globalObject: 'this', // Define the global object used,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              "@babel/plugin-proposal-class-properties", // Allows class properties syntax
              "@babel/plugin-transform-runtime", // Helps with async/await and other features
              "@babel/plugin-transform-react-jsx", // Required for JSX transformation
              "@babel/plugin-transform-react-display-name" // Adds display names to React components in the DevTools
            ]
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  externals: {
    // Specify external dependencies here
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // Add any other plugins you need here
  ]
};
