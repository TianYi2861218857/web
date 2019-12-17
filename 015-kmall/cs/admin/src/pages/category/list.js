import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import moment from 'moment'
import './index.css'
import { Breadcrumb,Table,Button} from 'antd'
import {
  Link,
} from "react-router-dom"

import {actionCreator} from './store/index.js'
import Layout from 'common/layout'

//容器组件
class CategoryList extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.handlePage(1)
	}
	render(){
		const columns = [
		  {
		    title: '分类名称',
		    dataIndex: 'name',
		    key: 'name',
		    render: text => <a>{text}</a>,
		  },
		  {
		    title: '手机分类名称',
		    dataIndex: 'mobileName',
		    key: 'mobileName',
		    render: text => <a>{text}</a>,
		  },
		  {
		    title: '是否显示',
		    dataIndex: 'isShow',
		    key: 'isShow',
		    render:(isShow)=>(isShow ? '是' : '否')
		  },
		  {
		    title: '排序',
		    dataIndex: 'order',
		    key: 'order',
		  },
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
			<div className='CategoryList'>
				<Layout>
					<Breadcrumb style={{margin: '16px 0'}}>
						<Breadcrumb.Item> 首页 </Breadcrumb.Item>
						<Breadcrumb.Item> 分类管理</Breadcrumb.Item>
						<Breadcrumb.Item> 分类列表 </Breadcrumb.Item>
					</Breadcrumb>
					<div className='btn'>
						<Link to='/category/add'><Button type="primary" className='add-btn'>新增分类</Button></Link>
					</div>
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
		list:state.get('category').get('list'),
		current:state.get('category').get('current'),
		pageSize:state.get('category').get('pageSize'),
		total:state.get('category').get('total'),
		isFecthing:state.get('category').get('isFecthing')
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


export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)