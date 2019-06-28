var path = require('path'); // load from Node.js

module.exports = [
// JavaScript
	{
		// all settings
		name: "JavaScript",

		// JS file in coding
	  entry: './src/main2.js',
	  
	  // output compiled and bundled file (only one)
	  output: {
	    path: path.resolve(__dirname, './dist/js'),
	    filename: 'main2.bundle.js',
	  },

	  // using Babel to compile files via babel-loader
	  module: {
		  rules: [
		    {
		      test: /\.m?js$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['@babel/preset-env']
		        }
		      }
		    }
		  ]
		}

	},
// TypeScript
	{
		name: "TypeScript",

		// ts file in coding
	  entry: './src/main.ts', 
	  
	  // output compiled and bundled file (only one)
	  output: {
	    path: path.resolve(__dirname, './dist/ts'),
	    filename: 'main.compiled.js',
	  },

	  // TypeScript
	  // 使用 sourceMap 幫助除錯追蹤 bundle前的程式碼位置
	  devtool: 'inline-source-map',

	  // compiling codes using TypeScript via ts-loader
	  module: {
		  rules: [
		    // TypeScript
		    {
	        test: /\.tsx?$/,
	        use: 'ts-loader',
	        exclude: /node_modules/
	      }
		  ]
		},
	  // TypeScript
	  resolve: {
	    extensions: [ '.tsx', '.ts', '.js' ]
	  }

	}
];