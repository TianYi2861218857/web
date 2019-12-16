import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import moment from 'moment'
import './index.css'
import { Breadcrumb,Table} from 'antd'

import {actionCreator} from './store/index.js'
import Layout from 'common/layout'

//容器组件
class User extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){

	}
	render(){
		const columns = [
		  
		]
		const{ list,current,pageSize,total,handlePage,isFecthing } =this.props	
		const dataSource = list.map((user)=>{
			return {
				key:user.get('_id'),
				username:user.get('username'),
				isAdmin:user.get('isAdmin'),
				email:user.get('email'),
				phone:user.get('phone'),
				createdAt:moment(user.get('createdAt')).format('YYYY-MM-DD HH:mm:SS'),
			}
		}).toJS()
		return(
			<div className='User'>
				<Layout>
					<Breadcrumb style={{margin: '16px 0'}}>
						<Breadcrumb.Item> 首页 </Breadcrumb.Item>
						<Breadcrumb.Item> 用户列表 </Breadcrumb.Item>
					</Breadcrumb>
					<div className='content'>
						<Table 
							columns={columns} 
							dataSource={dataSource} 
							pagination ={{
								//当前页,每页数据显示个数,数据总个数
								current:current,
								pageSize:pageSize,
								total:total
							}}
							onChange={(page)=>{
								handlePage(page.current)
							}}
							loading={{
								spinning:isFecthing,
								tip:'数据玩命加载中,请稍等'
							}}
						/>
					</div>
				</Layout>
			</div>	
		)
	}
}




//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		list:state.get('user').get('list'),
		current:state.get('user').get('current'),
		pageSize:state.get('user').get('pageSize'),
		total:state.get('user').get('total'),
		isFecthing:state.get('user').get('isFecthing')
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handlePage:(page)=>{
			dispatch(actionCreator.getPageAction(page))	
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(CategoryLiat)