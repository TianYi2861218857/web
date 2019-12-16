import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	usernum:0,
	ordernum:0,
	productnum:0,
	current:0,
	pageSize:0,
	total:0,
	isFecthing:false
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
	return state 
}