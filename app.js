'use strict';
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

//路由列表
let routes = require('./routes/index');
let users = require('./routes/users');
let menus = require('./routes/menus');

let app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.engine('html', require("swig").renderFile);
app.set('views', __dirname);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', routes);
app.use('/users', users);
app.use('/menus', menus);

// 开发环境与webpack-dev-server结合
if( app.get('env') === 'development'){

	// webpack-dev-server部分
	let webpack = require('webpack'),
		WebpackDevServer = require('webpack-dev-server'),
		config = require('./webpack.config.js'),
		proxy = require('proxy-middleware'),
		url = require('url');
		
	config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
	// ## proxy the request for static assets
	app.use('/build', proxy(url.parse('http://localhost:8080/build')));
	app.use('/public', proxy(url.parse('http://localhost:8080/public')));

	// # -----your-webpack-dev-server------------------
	let server = new WebpackDevServer(webpack(config), {
	    contentBase: __dirname,
	    hot: true,
	    quiet: false,
	    noInfo: false,
	    publicPath: "/build/",
	    stats: { colors: true }
	});

	// ## run the two servers
	server.listen(8080, "localhost", function() {});
}

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   let err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

module.exports = app;



// "use strict";
// let webpack = require('webpack');
// let WebpackDevServer = require('webpack-dev-server');
// let config = require('./webpack.config.js');
// config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

// let express = require('express');
// let proxy = require('proxy-middleware');
// let url = require('url');

// // ## --------your proxy----------------------
// let app = express();
// // ## proxy the request for static assets
// app.use('/build', proxy(url.parse('http://localhost:8080/build')));

// app.get('/*', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });


// # -----your-webpack-dev-server------------------
// let server = new WebpackDevServer(webpack(config), {
//     contentBase: __dirname,
//     hot: true,
//     quiet: false,
//     noInfo: false,
//     publicPath: "/build/",
//     stats: { colors: true }
// });

// // ## run the two servers
// server.listen(8080, "localhost", function() {});
// app.listen(3000);
