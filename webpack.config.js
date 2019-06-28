var path = require('path'); // load from Node.js

module.exports = [
	{
		// all settings
		name: "JavaScript",

		// 撰寫中的高版本JS程式
	  entry: './src/main.js',
	  
	  // 輸出的檔案位置
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'main.compiled.js',
	  },

	  // loader的模組，例如 Babel
	  module: {
		  rules: [
		  	// JavaScript
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
	{
		// all settings
		name: "TypeScript",

		// 撰寫中的高版本TS程式
	  entry: './src/main.ts', 
	  
	  // 輸出的檔案位置
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'ts.compiled.js',
	  },

	  // TypeScript
	  // 使用 sourceMap 幫助除錯追蹤 bundle前的程式碼位置
	  devtool: 'inline-source-map',

	  // loader的模組，例如 Babel
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