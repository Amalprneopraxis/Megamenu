const path = require('path');

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
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
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
      // Provide the global variable name
      commonjs: 'react', // CommonJS module format
      commonjs2: 'react', // CommonJS module format (for Node.js)
      amd: 'React', // AMD module format
      root: 'React', // Global variable (when used in browser)
    },
    'react-dom': {
      // Provide the global variable name
      commonjs: 'react-dom', // CommonJS module format
      commonjs2: 'react-dom', // CommonJS module format (for Node.js)
      amd: 'ReactDOM', // AMD module format
      root: 'ReactDOM', // Global variable (when used in browser)
    },
  },
};
