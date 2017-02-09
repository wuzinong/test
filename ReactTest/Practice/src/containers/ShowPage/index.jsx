import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.less';

//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class ShowPage extends Component{
	constructor(props){
		super(props);

		this.state = {
			list:[]
		}
	}

	componentDidMount(){
		let list = [];
		if(window.localStorage){
		   if(!!window.localStorage.getItem("listTest")){
		   	  list = window.localStorage.getItem("listTest").split(',');
		   }else{

		   }
		}

		this.setState({
			list:list
		});
	}

	addClick=()=>{
		let input = this.refs.addInput;
		let list = this.state.list;
		if(!!input.value){
			list.push(input.value);
			this.setState({list:list});
			input.value = "";
			if(window.localStorage){
			   window.localStorage.setItem("listTest",list);
			}
		}
	}

	handleDelete=(e)=>{
		let index = e.target.getAttribute("data-key");
		let list = this.state.list;
		if(index >=0){
		   list.splice(index,1);
		   this.setState({
		   	  list:list
		   });
		   if(window.localStorage){
			   window.localStorage.setItem("listTest",list);
		   }
		}

	}

	render(){
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

export default ShowPage;