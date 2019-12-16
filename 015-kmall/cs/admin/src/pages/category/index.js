import React,{Component} from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import CategoryList from './list.js'
import CategoryAdd from './add.js'

//容器组件
class Category extends Component{
	render(){
		return(
			<Switch>
				<Route exact path='/category' Component={CategoryList} />
				<Route path='/category/add' Component={CategoryAdd} />
			</Switch>
		)
	}
}




//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		
	}
}

// export default connect(mapStateToProps,mapDispatchToProps)(User)