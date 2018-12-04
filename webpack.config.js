const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
 
const config = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: './js/main.js',
		// publicPath: 'dist/js'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
		        test: /\.scss$/,
		        use: [ 'css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader?url=false', 'postcss-loader', 'sass-loader' ]
		    },
		    {
		        test: /\.html$/,
		        use: ['html-loader?attrs=false']
		    },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './src/html/view/index.html.ejs'
		}),
		new HtmlWebpackPlugin({
			filename: './test.html',
			template: './src/html/view/test.html.ejs'
		}),
	    new MiniCssExtractPlugin({
	    	filename: './css/style.css',
	    }),
		new CopyWebpackPlugin([
			{
				from: './src/fonts',
        		to: './fonts'
			},
			{
				from: './src/img',
				to: './img'
			},
			{
				from: './src/icons',
				to: './icons'
			}
		]),
		new CleanWebpackPlugin('dist'),
	]
}

module.exports = (env, options) => {
	let prod = options.mode === 'production';

	config.devtool = prod
		// ? 'source-map'
		? false
		: 'eval-souremap';

	return config;
} 