export default {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            // Enables CSS Modules
            modules: true,
            // Number of loaders applied before CSS loader
            importLoaders: 1,
            // Formatting CSS Class name
            localIdentName: '[name]_[local]_[hash:base64]',
            // Enable/disable sourcemaps
            sourceMap: true,
            // Enable/disable minification
            minimize: true
          }
        },
        {
          loader: 'sass-loader' // sass-loader
        }
      ]
    }
  ]
};