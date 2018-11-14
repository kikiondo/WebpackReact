import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import autoprefixer from 'autoprefixer'

const isProduction = process.env.NODE_ENV === 'production';

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  }
];

if (isProduction) {
  rules.push({
    test: /\.scss/,
    use: [
      'style-loader',
      MiniCssExtractPlugin.loader,
      'css-loader?minimize&sourceMap',
      {
        loader: 'postcss-loader',
        options: {
          autoprefixer: {
            browser: ['last 2 versions']
          },
          sourceMap: true,
          plugins: () => [autoprefixer]
        }
      },
      'resolve-url-loader',
      'sass-loader?outputStyle=compressed&sourceMap'
    ]
  });
} else {
  rules.push({
    test: /\.scss$/, // .scss
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]_[local]_[hash:base64]',
          sourceMap: true,
          minimize: true
        }
      },
      {
        loader: 'sass-loader' // sass-loader
      }
    ]
  });
}

export default {
  rules
};