import { Router, Route, browserHistory } from 'react-router';
import { App,Home,ShowPage,Regist} from '../containers';
import React from 'react';


// const ShowPage = (location,cb)=>{
// 	 require.ensure([],require =>{
// 	 	  cb(null, require('../containers/ShowPage').default)
// 	 },'showpage')
// }

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/app" component={App} />
    <Route path="/showpage" component={ShowPage}/>
    <Route path="/regist" component={Regist}/>
  </Router>
)
