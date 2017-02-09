import React,{Component} from 'react';

import './LoadingBox.less';

class LoadingBox extends Component{

	state={
		loadingShow:false
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			loadingShow:nextProps.loadingShow
		})
	}

	render(){
	   return (
	   	<div id="_loadingMaskUI_" className={this.state.loadingShow ? "":"loadingShow"}>
	        <div className="inner">
	            <div className="_maskload_">
	                <div className="loading" ></div>
	                <span className="_loadingtip">网络请求中...</span>
	            </div>
	        </div>
   		</div>
	   )
	}
}

export default LoadingBox;