import React,{Component} from 'react';
import './index.less';
import store from '../../redux/store';
import {fetchPosts,subPosts} from '../../redux/action';
import {connect} from 'react-redux'

class CommentsComp extends Component{
	constructor(props){
		super(props);
		store.dispatch(fetchPosts());

		this.state={
			nickName:"",
			words:""
		}
	}
	componentDidMount(){
		// let unsubscribe = store.subscribe(()=>{
		// 	console.log("unsubscribe method")
		// 	console.log(store.getState());
		// 	console.log(this.props.comments);
		// });
	}

	changeInfo=(e)=>{
		let state = this.state[this.e]
		this.state[e.target.name] = e.target.value;
		this.setState(this.state)
	}

	subComments=()=>{
	    let nickName = this.state.nickName;
	    let words = this.state.words;
	    console.log("enterred subComments")
	    console.log(this.state)
	    if(!!nickName && !!words){
	    	store.dispatch(subPosts(this.state));
	    }
	}


	render(){

		let topic = (
			<div className="article">
			  <div className="title">This is today's topic</div>
			  <p>this is the test paragraphy sssss  sssd ddddd ddddd</p>
			</div>
		)

		return (<div className="comments">
			  	  {topic}
			  	  <dl className="nickName">
			  	  	<dt>昵称：</dt>
			  	  	 <dd><input name="nickName" onChange={this.changeInfo} value={this.state.nickName}/></dd>
			  	  </dl>
			  	  <textarea onChange={this.changeInfo} name="words"></textarea>
			  	  <input className="commitBtn" onClick={this.subComments} type="button" value="提交评论"/>
			  	  <div className="commentsArea">
			  	  	<h2>热门评论：</h2>
			  	  	<div className="cList">
			  	  	    {this.props.comments.map((item,index)=>{
			  	  	    	return (
								<dl key={item.index}>
					  	  	        <dt>{item.author} 评论道：</dt>
					  	  	        <dd>{item.text}</dd>
				  	  	    	</dl>
			  	  	    	)
			  	  	    })}
			  	  	</div>
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
	return{
		comments:state.requestHandler.comments
	}
}

const dealedCommentsComp=connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentsComp);

export default dealedCommentsComp;