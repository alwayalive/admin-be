//框架组件
import React from 'react'
import { render } from 'react-dom'
import { Router,Route,browserHistory,hashHistory,IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

//自定义组件
import App from './home/app'
import Home from './home/home'
import Product from './product/main'
import NotFound from './error/404.js'

// reduces
import reduces from 'reduces/reduces.js'

//样式
import 'styles/index.less'
import 'styles/custom-ant-component-style.less'

let store = createStore( reduces, applyMiddleware( thunk ) );
store.subscribe( ()=> {
	console.info(store.getState())
});

render(
	<Provider store = { store }>
		<Router history = { browserHistory }>
			<Route path = "/" component = { App }>
				<IndexRoute component = { Home }/>
				<Route path = "product" component = { Product }/>
				<Route path='*' component={ NotFound } />
			</Route>
		</Router>
	</Provider>
	,
	document.getElementById("container")
);


// // 框架组件
// import React from 'react'
// import { render } from 'react-dom'
// import { Router,Route,browserHistory,hashHistory,IndexRoute } from 'react-router';

// //自定义组件
// import App from './test/container'
// import A from './test/a'
// import B from './test/b'

// //样式
// import '../../less/test.less'

// render(
// 	<Router history = { browserHistory }>
// 		<Route path = "/" component = { App }>
// 			<IndexRoute component = { A }/>
// 			<Route path = "b" component = { B }/>
// 		</Route>
// 	</Router>
// 	,
// 	document.getElementById("container")
// );