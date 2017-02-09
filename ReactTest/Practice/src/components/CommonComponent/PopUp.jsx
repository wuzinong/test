import React,{Component} from 'react';

import classNames from 'classNames';

import './PopUp.less';

class PopUp extends Component{
	constructor(props){
		super(props);
		this.close = this.close.bind(this);
	}

	static defaultProps={
		message:"default message from PopUp",
		ifShow:true
	}

	state={
		message:this.props.message,
		ifShow:this.props.ifShow
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			message:nextProps.message,
			ifShow:nextProps.ifShow
		});
		// var dialog = this.refs.popOuter.querySelector(".modal-dialog");
		// dialog.classList.add("modal-dialogAnimate");
	}

	close(){

		this.setState({ifShow:true});
	}

	render(){
		var hideStyle={
		    backgroundColor:"rgba(0,0,0,0.3)",
		    width:"100%",
		    height:"100%",
		    position:"absolute",
		    top:0
		}

		var pupStyle = {
			 position:"absolute",
		  	 left:"50%",
		  	 textAlign: "left", 
		  	 zIndex: 999,
		  	 width:"90%",
		  	 marginLeft:"-45%",
		  	 top:"30%"
		}

		var cx = classNames({
			"showStyle":this.state.ifShow
		});
		var cxDyy = classNames({
			"showStyle":this.state.ifShow
		});
		return (
			<div>
				<div ref="popOuter" className={cx} style={pupStyle}>
					<div className="modal-dialog modal-dialogAnimate">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">提示信息框</h4>
							</div>
							<div className="modal-body">
								{this.state.message}
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-default" onClick={this.close}>关闭</button>
							</div>
						</div>
					</div>
				</div>

				<div className={cxDyy} ref="dyy" style={hideStyle}></div>
			</div>
			
			//使用transition-group
			// <div>
			// 	<div ref="popOuter" className={cx} style={pupStyle}>
			// 		<ReactCSSTransitionGroup
			// 		    transitionName="dialogTrans"
			// 		    transitionEnterTimeout={500}
			// 		    transitionLeaveTimeout={300}
			// 		 >

			// 		 <div className="modal-dialog">
			// 			<div className="modal-content">
			// 				<div className="modal-header">
			// 					<h4 className="modal-title">提示信息框</h4>
			// 				</div>
			// 				<div className="modal-body">
			// 					{this.state.message}
			// 				</div>
			// 				<div className="modal-footer">
			// 					<button type="button" className="btn btn-default" onClick={this.close}>关闭</button>
			// 				</div>
			// 			</div>
			// 		</div>

			// 		</ReactCSSTransitionGroup>
					
			// 	</div>

			// 	<div className={cxDyy} ref="dyy" style={hideStyle}></div>
			// </div>
		)
	}
}

export default PopUp;