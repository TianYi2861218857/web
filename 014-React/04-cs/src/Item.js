/*
* @Author: TomChen
* @Date:   2018-08-17 15:14:29
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-17 16:11:48
*/
import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component{
	
	constructor(props);{
		super(props);
		this.state = {};
		this.handleDelete = this.handleDelete.bind(this)
	}
	shouldComponentUpdata(nextProps,nextState){
		if (nextProps.content != this.props.content){
			return true;
		}else{
			return false;
		}
	}

	handleDelete(){
		// console.log(this.props.index)
		//console.log(this.props.data)
		//this.props.data.splice(this.props.index,1)
		//console.log(this.props.data)
		// this.props.handleDelete(this.props.index);
		const {handleDelete,index} = this.props;
		handleDelete(index);
	}

	render(){
		const {content,test} = this.props;
		return (
			<li onClick={this.handleDelete.bind(this)}>
				{this.props.content}
			</li>
		)
	}
}
Item.propTypes = {
	index: PropTypes.number,
	content:propTypes.string.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default Item;