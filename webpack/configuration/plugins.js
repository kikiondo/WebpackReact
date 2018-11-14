import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new HtmlWebPackPlugin({
    title: 'Finden',
    template: './src/index.html',
    filename: './index.html'
  })
];

if (isProduction) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].css'
    })
  );
}

export default plugins;