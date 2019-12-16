import axios from 'axios'
import * as types from './actionTypes.js'
import api from 'api'

const getPageStartAction = () =>({
	type:types.PAGE_REQUEST_START
})
const getPageDoneAction = () =>({
	type:types.PAGE_REQUEST_DONE
})

const getSetPageAction = (payload) =>({
	type:types.SET_PAGE,
	payload
})

export const getPageAction = (page)=>{
	return (dispatch,getState)=>{
		//发送请求前显示loading
		dispatch(getPageStartAction())
		api.getUserList({
			page:page
		})
		.then(result=>{
			//派发action
			// console.log(result)
			const data = result.data
			if(data.code == 0){
				dispatch(getSetPageAction(data.data))
			}
		})
		.catch(err=>{
			console.log(err)
		})
		.finally(()=>{
			//请求完毕后loading取消
			dispatch(getPageDoneAction())
		})
	}
}
