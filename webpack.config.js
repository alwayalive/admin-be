var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
    //定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, 'public/styles');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 与nodejs一起使用热加载服务插件
var HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    // devtool: 'eval-source-map', //显示原始报错位置；默认显示bundle.js中的错误
    resolve: {
        alias : {
            "components": ROOT_PATH + "/assets/components",
            "actions": ROOT_PATH + "/assets/actions",
            "reduces": ROOT_PATH + "/assets/reduces",
            "commons": ROOT_PATH + "/assets/components/common",
            "styles": ROOT_PATH + "/public/styles",
        }
    },
    module: {
        loaders: [
            // { test: /\.js?$/, loaders: ['jsx-loader?harmony'] },
            {
                test: /\.js?$/,
                loaders: ['babel-loader']
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css!less'),
            },{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css'),
            }, {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
                loaders: ['url?limit=50000']
            }
        ]
    },
    entry: {
        app: ['./assets/components/entry.js'],
        vendor : ['react','redux','react-redux','react-router','react-dom','immutable','redux-thunk'],
    },
    output: {
        path: __dirname + '/build/',
        publicPath: '/build/',
        filename: '[name]_bundle.js'
    },
    plugins:[
        new ExtractTextPlugin("styles/[name].css"),
        new HotModuleReplacementPlugin(),
        new CommonsChunkPlugin("vendor","vendor.bundle.js")
    ]
    // plugins: [
    //     new HtmlWebpackPlugin({ //首页
    //         title: '管理后台',
    //         template: './views/index.html',
    //         inject: 'body',
    //         chunks: ['index_bundle']
    //     })
    // ]
};
// var webpack = require('webpack');

// module.exports = {
//     entry: [
//         // 'webpack-dev-server/client?http://localhost:8080',
//         // 'webpack/hot/dev-server',
//         './public/assets/components/entry.js'
//     ],
//     output: {
//         path: __dirname + '/build/',
//         publicPath: 'http://localhost:8081/build/',
//         filename: 'index_bundle.js'
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//     ],
//     module: {
//         loaders: [
//             {
//                 test: /\.js?$/,
//                 loaders: ['babel-loader']
//             }, {
//                 test: /\.less$/,
//                 loader: ExtractTextPlugin.extract('css!less'),
//             },{
//                 test: /\.css$/,
//                 loader: ExtractTextPlugin.extract('css'),
//             }, {
//                 test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
//                 loaders: ['url?limit=50000']
//             }
//         ]

//     },
//     resolve: {
//         alias : {
//             "actions": ROOT_PATH + "/public/assets/actions",
//             "styles": ROOT_PATH + "/public/styles",
//             "reduces": ROOT_PATH + "/public/assets/reduces",
//             "components": ROOT_PATH + "/public/assets/components",
//             "commons": ROOT_PATH + "/public/assets/components/common",
//         }
//     },
//     plugins:[
//         new ExtractTextPlugin("styles/[name].css"),
//         new webpack.HotModuleReplacementPlugin()
//     ]
// };