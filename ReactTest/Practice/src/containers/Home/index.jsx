
import React,{Component} from 'react';
import {HomeComponents,PopUp,LoadingBox} from '../../components';
import {browserHistory} from 'react-router';

class Home extends Component{
	constructor(props){
		super(props);
	}

	state={
		message:"default message from home",
		ifShow:true,
		loadingShow:false
	}

	subResult=(ifpassed,str,showLoading)=>{
		if(!!showLoading){
			console.log("ddd")
			this.setState({
				loadingShow:true,
				ifShow:true
			});
			this.timeout = setTimeout(()=>{
				this.setState({
					loadingShow:false
				});
				browserHistory.push('/ShowPage');
			},2000);
		}else{
			this.setState({
			message:str,
			ifShow:ifpassed
		});
		}
	}

	componentWillUnmount(){
		if(!!this.timeout){
			console.log("timeout cleared")
			clearTimeout(this.timeout);
		}
	}

	render(){
		var config = this.state;
		console.log(config);
		return (
			<div>
			  <HomeComponents subResult = {this.subResult} />
			  <PopUp {...config}/>
			  <LoadingBox loadingShow ={this.state.loadingShow}/>
			</div>
		)
	}
}

export default Home;