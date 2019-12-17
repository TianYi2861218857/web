import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	usernum:0,
	ordernum:0,
	productnum:0,
	current:0,
	pageSize:0,
	total:0,
	isFecthing:false,
	categories:[]
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
		return state.merge({
			list:fromJS(action.payload.list),
			current:fromJS(action.payload.current),
			pageSize:fromJS(action.payload.pageSize),
			total:fromJS(action.payload.total)
		})
	}
	if(action.type == types.PAGE_REQUEST_START){
		return state.set('isFecthing',true)
	}
	if(action.type == types.PAGE_REQUEST_DONE){
		return state.set('isFecthing',false)
	}
	//处理获取最新父级分类
	if(action.type == types.SET_LEVEL_CATEGORIES){
		return state.set('categories',fromJS(action.payload))
	}
	return state 
}