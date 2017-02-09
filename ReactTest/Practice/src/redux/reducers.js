import {createStore} from 'redux';

counter(state=0,action){
	switch(action.type):{
		case 'INCREMENT':
			return state+1;
		case 'DECREMENT':
			return state-1;
		default:
			return state;
	}
}

let store = createStore(counter);
const PureRender=()=>{
	document.body.innerText = store.getState();
}
store.subscribe(PureRender);
PureRender();

document.body.addEventListener("click",function(){
	store.dispatch({type:'DECREMENT'});
},false);
