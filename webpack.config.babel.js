import webpack from 'webpack';
import path from 'path';

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = 'production' === nodeEnv;

const config = {
	cache: true,
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	resolve: {
		modules: ['node_modules'],
	},
	module: {
		rules: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/, 
			use: [{
				loader: 'babel-loader',
				options: {
					babelrc: false,
					presets: [
						'es2015',
						'react'
					]
				}

			}]
		},
		{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		},
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),

		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(nodeEnv)
			}
		}),
	],
	stats: { colors: true },
};

// uglify plugin
if (isProduction) {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin( {
			compress: { warnings: false },
			output: { comments: false },
			sourceMap: true
		} )
	);
}

module.exports = config;