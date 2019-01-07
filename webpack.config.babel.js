import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const BUILD_DIR = path.resolve( __dirname, 'dist' );
const APP_DIR = path.resolve( __dirname, 'src' );

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = 'production' === nodeEnv;

const config = {
	cache: true,
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'js/main.js'
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
			}]
		},
		{
			test: /\.css$/,
			loaders: ExtractTextPlugin.extract( {
				fallback: 'style-loader',
				use: isProduction
					? 'css-loader?minimize!postcss-loader'
					: 'css-loader?sourceMap!postcss-loader?sourceMap'
		} )
		},
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),

		new ExtractTextPlugin( {
			filename: 'css/[name].css',
			allChunks: true
		} ),

		new webpack.DefinePlugin( {
			'process.env': {
				NODE_ENV: JSON.stringify( nodeEnv )
			}
		} ),
	],
	stats: { colors: true },
};

// uglify plugin
if ( isProduction ) {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin( {
			compress: { warnings: false },
			output: { comments: false },
			sourceMap: true
		} )
	);
}

module.exports = config;
