import { fromJS } from 'immutable'
const defaultState = fromJS({
	usernum:0,
	ordernum:0,
	productnum:0
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	
	
	return state
}