import { combineReducers } from 'redux';
import {DELETE_ITEM,ADD_ITEM,GET_ITEMS,ANOTHER_TEST,FETCH_POSTS,REQUEST_POSTS,RECEIVE_POSTS,PRE_SUBPOSTS} from '../actionTypes.js';


const initState = {
	list: window.localStorage.getItem("listTest").split(','),
	test:"this is a test",
	comments:[]
};


const handleRecord = (state=initState,action)=>{
	switch (action.type){
		case GET_ITEMS:{
			console.log("GET_ITEMS")
			
			return Object.assign({},state,{
				list:state.list
			});
		} break;
		case DELETE_ITEM:{
			console.log("enterred delete action");
			console.log("index = "+action.index);
			let index = action.index;
			let list = state.list;
			if(index >=0){
			   list.splice(index,1);
			   if(window.localStorage){
				   window.localStorage.setItem("listTest",list);
			   }
			}
			return Object.assign({},state,{
				list
			});
		} break;
		case ADD_ITEM:{
			console.log("enterred add item func");
			let text = action.text;
			let list = state.list;
			list.push(text);
			if(window.localStorage){
			   window.localStorage.setItem("listTest",list);
			}
			return Object.assign({},state,{
				list:list
			});
		} break;
		default:
		    return state;//调用connect 方法时默认第一次返回初始化的state
	}
}



const anotherHandler = (state=initState,action)=>{
	switch (action.type){
		 case ANOTHER_TEST:{
		 	console.log(ANOTHER_TEST)
		 	return Object.assign({},state,{test:action.test});
		 }
		 default:return state;
	}
}


const requestHandler = (state=initState,action)=>{
	switch (action.type){
		case RECEIVE_POSTS:{
			console.log("REQUEST_POSTS called")
		}
		case REQUEST_POSTS:{
			switch (action.status){
				case "success":{
					console.log("reducer success")
					return Object.assign({},state,{
						comments:action.content
					});
				}
				case "failed":{
					console.log("fetch failed");
					return state;
				}
				default:
				  return state;
			}
		}
		case PRE_SUBPOSTS:{
			 console.log("pre_subposts called");
		}
		default:
		  console.log("default return called");
		  console.log(state);
		  return state;
	}
}


export default combineReducers({
    handleRecord,
    anotherHandler,
    requestHandler
});
