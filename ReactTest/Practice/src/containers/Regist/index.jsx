import React,{Component} from 'react';
import {RegistComponent,LoadingBox} from '../../components';


class Regist extends Component{

	state={
		loadingShow:false
	}
    dealSub=(e)=>{
 		console.log("called");
 		return false;
	}
	render(){
		var config={
			dealSub:this.dealSub
		}
		return (
			<div>
			   <RegistComponent {...config}/>
			   <LoadingBox {...this.state}/>
			</div>
		)
	}
}
export default Regist;