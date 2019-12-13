import React,{Component} from 'react' 
import { Alert,Button } from 'antd'
import './index.css'
import { Link } from "react-router-dom"

class Err extends Component{
	render(){
		return (
			<div className='Err'>
				<Alert
				  message="Not Fount"
				  description="您请求的页面走丢啦,请确认输入的地址是否正确"
				  type="error"
				  showIcon
				/>
				<Link to=''><Button type="link">返回首页</Button></Link>
			</div>
		)
	}
}

export default Err