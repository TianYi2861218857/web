import axios from 'axios'
import * as types from './actionTypes.js'
import api from 'api'
import { message } from 'antd'

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
			console.log(result)
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
//处理新增分类action
export const getAddCategoriesAction = (values)=>{
	return (dispatch,getState)=>{
		api.addCategories(values)
		.then(result=>{
			// console.log(result)
			const data = result.data
			if(data.code == 0){
				message.success('新增分类成功')
				dispatch(setLevelCategoriesAction(data.data))
			}else{
				message.error(data.message)
			}
		})
		.catch(err=>{
			console.log(err)
		})
	}
}

const setLevelCategoriesAction = (payload) =>({
	type: types.SET_LEVEL_CATEGORIES,
	payload
})
//处理获取最新父级分类
export const getLevelCategoriesAction = ()=>{
	return (dispatch,getState)=>{
		api.getLevelCategories({
			level:2
		})
		.then(result=>{
			// console.log("::::",result)
			const data = result.data
			if(data.code == 0){
				dispatch(setLevelCategoriesAction(data.data))
			}else{
				message.error('请求失败,请稍后再试!')
			}
		})
		.catch(err=>{
			console.log(err)
		})
	}
}