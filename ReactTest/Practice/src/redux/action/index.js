import {DELETE_ITEM,ADD_ITEM,GET_ITEMS,ANOTHER_TEST} from '../actionTypes.js';

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