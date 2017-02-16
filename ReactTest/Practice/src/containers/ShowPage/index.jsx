import React,{Component,PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.less';
import store from '../../redux/store';
import {getItems,deleteItem,addItem,another_test} from '../../redux/action';
import {connect} from 'react-redux';

class ShowPage extends Component{
	constructor(props){
		super(props);

		// this.state = {
		// 	list:[]
		// }
		// console.log("test connect");
		// console.log(this.props.list);
		this.state={
			list:this.props.list
		}//使用connect，初始化直接调用props中传递过来的list

		console.log(this.props.testFuncProps());//测试props中传入方法
	}

	componentDidMount(){
		let list = [];
		console.log("did mount");
		//监听state更新
		let unsubscribe = store.subscribe(()=>{
			console.log(store.getState());
		});
	}

	addClick=()=>{

		let input = this.refs.addInput;
		if(!!input.value){
			store.dispatch(addItem(input.value));
			// let list = store.getState().handleRecord.list;
			// this.setState({list:list}); 
			//使用connect ，dispatch以后无需再通过getState获取最新状态，直接回更新至props
			this.setState({list:this.props.list}); 
			input.value = "";
		}
	}

	handleDelete=(e)=>{
		let index = e.target.getAttribute("data-key");
		if(index >=0){
		   store.dispatch(deleteItem(index));
		   // let list = store.getState().handleRecord.list;
		   // this.setState({
		   // 	  list:list
		   // });
		   
		    this.setState({list:this.props.list}); 
		}
		//make a test
		store.dispatch(another_test("test word"))
	}

	render(){
		console.log("renderred")
		console.log(this.props.list);
		return (
		   <div className="showPage">
		      <div>
		         <input type="text" ref="addInput"/> <button onClick={this.addClick}>Add</button>
		      </div>
		      <div>
			         <ReactCSSTransitionGroup
				       transitionName="example"
				       transitionAppear={true}
				       transitionAppearTimeout={100}
				       transitionEnterTimeout={500}
				       transitionLeaveTimeout={500}
				       component="ol"
				      >
					      	{
					      	  this.state.list.map(function(item,index){
					      	  	return <li key={index}>
					      	  	   <span>{item}</span>&nbsp;&nbsp;&nbsp;&nbsp;
					      	  	   <span onClick={this.handleDelete} data-key={index} className="delete">delete</span>
					      	  	</li>
					      	  }.bind(this))
					      	}
			      	 </ReactCSSTransitionGroup>
		      </div>
		   </div>
		)
	}
}

const mapDispatchToProps = () => {
	return{
		testFuncProps() {
			console.log("testFuncProps called")
		}
	}
}


const mapStateToProps=(state)=>{
	return {
		list:state.handleRecord.list
	}
}
const DealdShowPage = connect(
	mapStateToProps,//第一个参数将reduce中state的值作为props传入
	mapDispatchToProps//第二个参数将方法作为props传入
)(ShowPage);

export default DealdShowPage;