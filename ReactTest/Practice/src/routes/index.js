import { Router, Route, browserHistory } from 'react-router';
import { App,Home,ShowPage,Regist,CommentsComp} from '../containers';
import React from 'react';
import store from '../redux/store';
import {Provider} from 'react-redux';

// const ShowPage = (location,cb)=>{
// 	 require.ensure([],require =>{
// 	 	  cb(null, require('../containers/ShowPage').default)
// 	 },'showpage')
// }
// 

export default (
  <Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path="/" component={Home}/>
	    <Route path="/app" component={App} />
	    <Route path="/showpage" component={ShowPage}/>
	    <Route path="/regist" component={Regist}/>
	    <Route path="/test1" component={CommentsComp}/>
	  </Router>
  </Provider>
)
