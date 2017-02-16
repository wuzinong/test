
import React,{Component,PropTypes} from 'react';


import {browserHistory } from 'react-router';
import './HomeComponents.less';

class HomeComponents extends Component{
 	constructor(props){
 		super(props);
 		let test = this.props.testAttr;
 		console.log(test);
 	}

 	handleSub=(e)=>{
 		e.preventDefault();
 		let result ="";
 		var name = this.refs.name.value;
		var pwd = this.refs.pwd.value;
		console.log(this.refs);
		if(name === "" || pwd === ""){
			result = "请输入正确的用户名密码";
			console.log(result);
			this.spredResult(false,result)
		}else{
			result = "登录中..."
			this.spredResult(false,result,"showLoading");
		}
 	}
 	spredResult=(hasHideClass,str,showLoading)=>{
 		this.props.subResult(hasHideClass,str,showLoading);
 	}
 	goRegist=()=>{
 		browserHistory.push('/regist');
 	}
 	gotest1=()=>{
 		//redux 异步数据流、action、middleware等
 		browserHistory.push('/test1');
 	}

	render(){
	  return (
	  	<div className="container">
	     	<form onSubmit={this.handleSub}>
		     	  <div className="form-group col-sm-10">
		     	  	<label htmlFor="name">用户名</label>
		     	  	<input ref="name" className="form-control" type="text" placeholder="请输入用户名..."/>
		     	  </div>
		     	  <div className="form-group col-sm-10">
		     	  	<label htmlFor="name">密码</label>
		     	  	<input ref="pwd" className="form-control" type="password" placeholder="请输入密码..."/>
		     	  </div>
		     	  <div className="form-group col-sm-10 row">
		     	        <div className="col-xs-4 col-xs-offset-1">
		     	  		<input type="submit" className="btn btn-large btn-success" value="Login"/>
		     	  		</div>
		     	  		<div className="col-xs-4  col-xs-offset-1">
		     	  		<input onClick={this.goRegist} type="button" className="btn btn-large btn-success" value="regist"/>
		     	  		</div>
		     	  </div>
		     	  	  <div className="form-group col-sm-10 row">
		     	  		<div className="col-xs-4 col-xs col-xs-offset-1">
		     	  			<input onClick={this.gotest1} type="button" className="btn btn-large btn-success" value="test1"/>
		     	  		</div>
		     	  </div>
	     	</form>
	  	</div>
	  )
	}
}
HomeComponents.propTypes={
	testAttr:PropTypes.string.isRequired
}
export default HomeComponents;

