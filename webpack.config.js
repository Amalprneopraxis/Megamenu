const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/Megamenu.js', // Path to your component entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'Megamenu.bundle.[chunkhash].js', // Output filename
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
            "presets": [
              "@babel/preset-env", // Transpiles modern JavaScript features to be compatible with older browsers
              "@babel/preset-react" // Transpiles JSX and other React-specific syntax
            ],
            "plugins": [
              "@babel/plugin-proposal-class-properties", // Allows class properties syntax
              "@babel/plugin-transform-runtime" // Helps with async/await and other features
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
  resolve: {
    extensions: ['.js', '.jsx'] // Add this section to resolve .js and .jsx files without specifying the extension
  }
};
