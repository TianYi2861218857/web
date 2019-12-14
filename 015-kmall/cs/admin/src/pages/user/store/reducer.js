import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[{
		key:0,
		username:'admin',
		isAdmin:'是',
		email:'2861218857@qq.com',
		phone:18737646837, 
		createdAt:'2019-12-14 17:04:20'
	}],
	usernum:0,
	ordernum:0,
	productnum:0
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == types.SET_COUNT){
		return state.merge({
			usernum:action.payload.usernum,
			ordernum:action.payload.ordernum,
			productnum:action.payload.productnum
		})
	}
	return state
}