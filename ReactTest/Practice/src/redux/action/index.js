import {DELETE_ITEM,ADD_ITEM,GET_ITEMS,ANOTHER_TEST,FETCH_POSTS,RECEIVE_POSTS,REQUEST_POSTS,PRE_SUBPOSTS} from '../actionTypes.js';
import fetch from 'isomorphic-fetch';
export const getItems=()=>{
	return {
		type:GET_ITEMS
	}
}

export const deleteItem=(index)=>{
    return {
       type:DELETE_ITEM,
       index
    }
}

export const addItem = (text)=>{
	return {
		type:ADD_ITEM,
		text
	}
}

export const another_test=(test)=>{
	return {
		type:ANOTHER_TEST,
		test
	}
}

const requestPosts=(subreddit)=>{
	 return {
	 	 type:REQUEST_POSTS,
	 	 subreddit
	 }
}
const receivePosts=(json)=>{
	return {
		type:RECEIVE_POSTS,
		status:"success",
		content:json
	}
}

const preSubPost=(obj)=>{
	return {
		type:PRE_SUBPOSTS,
		obj
	}
}

const ErrorFetch = {
	type:RECEIVE_POSTS,
	status:"failed"
}

//引自：http://cn.redux.js.org/docs/advanced/AsyncActions.html
// 来看一下我们写的第一个 thunk action 创建函数！
// 虽然内部操作不同，你可以像其它 action 创建函数 一样使用它：
// store.dispatch(fetchPosts('reactjs'))

export const fetchPosts=()=>{
	  // Thunk middleware 知道如何处理函数。
	  // 这里把 dispatch 方法通过参数的形式传给函数，
	  // 以此来让它自己也能 dispatch action。
	 return (dispatch)=>{
	 	 //dispatch(requestPosts(subreddit));//请求前先触发一下，如果有需要的话
	 	 dispatch({type:RECEIVE_POSTS})
	 	 return fetch('http://localhost:65211/Data/getComments',{
	 	 		method:'GET',
	 	 		mode:'cors',
	 	 		cache:'default'
	 	     })
	 	     .then(response=>{
	 	     	if(response.ok){
	 	     		response.json().then(res=>{
	 	     		console.log(res)
	 	     		dispatch(receivePosts(res))
	 	     	   })
	 	     	}else{
	 	     	    dispatch(ErrorFetch)
	 	     	}
	 	     })
	 	     .catch(err=>{
	 	     	 console.log("fetch error")
	 	     })
	 }
}

export const subPosts=(obj)=>{
	return (dispatch)=>{
		dispatch(preSubPost(obj));
		var data = JSON.stringify(obj);
		console.log("进入 sub post");
		console.log(obj)
		console.log(data);
		return fetch('http://localhost:65211/Data/saveComments',{
			method:"POST",
			mode:'cors',
			cache:'default',
			 headers: {
			    "Content-Type": "application/x-www-form-urlencoded"
			  },
			//body:data
			body:"nickName="+obj.nickName+"&words="+obj.words
		})
		.then(response=>{
			    console.log("sub post succeed")
	 	     	if(response.ok){
	 	     		response.json().then(res=>{
	 	     		console.log(res)
	 	     		dispatch(receivePosts(res))
	 	     	   })
	 	     	}else{
	 	     	    dispatch(ErrorFetch)
	 	     	}
	 	     })
	 	     .catch(err=>{
	 	     	 console.log("fetch error")
	 	})
	}
}

//后台使用c# 对应代码：
//using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Web;
// using System.Web.Mvc;
// using System.Web.Script.Serialization;

// namespace WebFactory.Controllers
// {
//     public class DataController : Controller
//     {
//         //
//         // GET: /Api/
//         public static List<comments> clist = new List<comments>() { new comments() { id = "1", author = "peter", text = "I think this article is gorgeous" }, new comments() { id = "2", author = "tom", text = "I don't share the same view with you" } };


//         [HttpGet]
//         public JsonResult getComments()
//         {
//             Response.AddHeader("Access-Control-Allow-Origin","*");
//             Response.AddHeader("Access-Control-Request-Method", "*");
//             //string str = Json(clist).ToString();
//             //Response.Write(str);
//             return Json(clist,JsonRequestBehavior.AllowGet);
//         }

        // [HttpPost]
        // public JsonResult saveComments(string nickName, string words)
        // {
        //     Response.AddHeader("Access-Control-Allow-Origin", "*");
        //     Response.AddHeader("Access-Control-Request-Method", "*");

        //     try
        //     {

        //         //comments book = new JavaScriptSerializer().Deserialize<comments>(s);
        //         //blist.Add(book);
        //         blist.Add(new comments() { author=nickName,text=words});
        //         return Json(blist, JsonRequestBehavior.AllowGet);
        //     }
        //     catch (Exception)
        //     {
        //         return Json(blist, JsonRequestBehavior.AllowGet);
        //     }
           
        // }

//         public class comments
//         {
//             public string id { get; set; }
//             public string author { get; set; }
//             public string text { get; set; }
//         }
 
//     }
// }
