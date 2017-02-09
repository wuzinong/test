import React,{Component} from 'react';
import './RegistComponents.less';

class RegistComponents extends Component{
	
	constructor(props){
		super(props);
		this.state = this.initialState();
	}

	
	initialState(){
		return {
			userName:"",
			pwd:"",
			pwdConfirm:"",
			email:"",
			mobile:"",
			birthday:"",
			gender:true,
			hobby:["唱歌"]
		}
	}

	innerDealSub=(e)=>{
		e.preventDefault();
		console.log(e.target)
		this.props.dealSub();
	}

	handleChange=(e)=>{
		// var newState = {};
		// newState[e.target.name]=e.target.value;
		// Object.assign(this.state,newState);
		// this.setState(this.state);
		if(e.target.name === "gender"){
			this.state[e.target.name]=e.target.value==="男"?true:false;
		}else if(e.target.name === "hobby"){
			let val = e.target.value;
			let index = this.state[e.target.name].indexOf(e.target.value);
			console.log(index);
			if(index>=0){
				this.state[e.target.name].splice(index,1);
			}else{
				this.state[e.target.name].push(val);
			}
		}else{
			this.state[e.target.name]=e.target.value;
		}

		this.setState(this.state);
		console.log(this.state);
	}

	render(){
		return (
			<div className="container-fluid registDiv">
				<form onSubmit={this.innerDealSub}>
					<div className="form-group row">
						<label  className="commonlabel col-xs-4 text-primary" htmlFor="userName">用户名：</label>
						<div className="col-xs-8">
						   <input name="userName"  onChange={this.handleChange} value={this.state.userName} className="form-control" type="text" placeholder="请输入用户名..."/>
						</div>
					</div>
					<div className="form-group row">
						<label  className="commonlabel col-xs-4 text-primary" htmlFor="pwd">密码：</label>
						<div className="col-xs-8">
						   <input name="pwd"  onChange={this.handleChange} value={this.state.pwd} className="form-control" type="password" placeholder="请输入密码..."/>
						</div>
					</div>
					<div className="form-group row">
						<label  className="commonlabel col-xs-4 text-primary" htmlFor="pwdConfirm">确认密码：</label>
						<div className="col-xs-8">
						   <input name="pwdConfirm" onChange={this.handleChange} value={this.state.pwdConfirm}  className="form-control" required type="password" placeholder="请输入确认密码..."/>
						</div>
					</div>
					<div className="form-group row">
						<label  className="commonlabel col-xs-4 text-primary" htmlFor="email">邮箱：</label>
						<div className="col-xs-8">
						   <input name="email" onChange={this.handleChange} value={this.state.email}  className="form-control" type="email" placeholder="请输入邮箱..."/>
						</div>
					</div>
					<div className="form-group row">
						<label  className="commonlabel col-xs-4 text-primary" htmlFor="mobile">手机：</label>
						<div className="col-xs-8">
						   <input name="mobile" onChange={this.handleChange} value={this.state.mobile}  className="form-control" type="mobile" placeholder="请输入手机..."/>
						</div>
					</div>
					<div className="form-group row">
						<label  className="commonlabel col-xs-4 text-primary" htmlFor="birthday">生日：</label>
						<div className="col-xs-8">
						   <input name="birthday"  onChange={this.handleChange} value={this.state.birthday} className="form-control" type="date" placeholder="请选择生日..."/>
						</div>
					</div>
					<div className="form-group row">
						<label  className="commonlabel col-xs-4 text-primary" htmlFor="gender">性别：</label>
						<div className="col-xs-8 row col-xs-push-1">
							<label className="radio-inline col-xs-5 radioCommon">
							  <input name="gender" onChange={this.handleChange} defaultChecked={this.state.gender} value="男" type="radio" />男
							</label>
						   <label className="radio-inline col-xs-5 radioCommon">
							  <input name="gender" onChange={this.handleChange} defaultChecked={!this.state.gender} value="女" type="radio" />女
							</label>
						</div>
					</div>
					<div className="form-group row">
						<label  className="commonlabel col-xs-4 text-primary" htmlFor="gender">爱好：</label>
						<div className="col-xs-8 row col-xs-push-1">
							<label className="checkbox col-xs-6 radioCommon">
							  <input name="hobby" onChange={this.handleChange} defaultChecked={this.state.hobby.indexOf("游戏")>=0?true:false} value="游戏" type="checkbox" />游戏
							</label>
						   <label className="checkbox col-xs-6 radioCommon">
							  <input name="hobby" onChange={this.handleChange} defaultChecked={this.state.hobby.indexOf("唱歌")>=0?true:false} value="唱歌" type="checkbox" />唱歌
							</label>
						    <label className="checkbox col-xs-6 radioCommon">
							  <input name="hobby" onChange={this.handleChange} defaultChecked={this.state.hobby.indexOf("其他")>=0?true:false} value="其他" type="checkbox" />其他
							</label>
						</div>
					</div>
					<div className="form-group row">
					    <label  className="commonlabel col-xs-4 text-primary" htmlFor="province">省份：</label>
						<div className="col-xs-8 row">
							<select name="province" className="form-control">
								 <option value="">请选择...</option>
								 <option value="">上海</option>
								 <option value="">山西</option>
								 <option value="">陕西</option>
							</select>
						</div>
					</div>
					<div className="form-group row">
					    <label  className="commonlabel col-xs-4 text-primary" htmlFor="city">城市：</label>
						<div className="col-xs-8 row">
							<select name="city" className="form-control">
								 <option value="">请选择...</option>
								 <option value="">上海</option>
								 <option value="">山西</option>
								 <option value="">陕西</option>
							</select>
						</div>
					</div>
					<div className="form-group row">
					    <label  className="commonlabel col-xs-4 text-primary" htmlFor="region">区域：</label>
						<div className="col-xs-8 row">
							<select name="region" className="form-control">
								 <option value="">请选择...</option>
								 <option value="">上海</option>
								 <option value="">山西</option>
								 <option value="">陕西</option>
							</select>
						</div>
					</div>
					<div className="form-group">
							<button className="btn btn-large btn-primary btn-block" type="submit">提交</button>
					</div>
				</form>
			</div>
	    )
	}
}

export default RegistComponents;