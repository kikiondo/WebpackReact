import HtmlWebPackPlugin from 'html-webpack-plugin';
const plugins = [
  new HtmlWebPackPlugin({
    title: 'Finden',
    template: './src/index.html',
    filename: './index.html'
  })
];
export default plugins;