import React, {Component} from 'react';

import TestSubSub from './test3.jsx';

class TestSub extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentName: 'currentName'
		};
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps);
	}
	_onClick(){
		this.setState({
			currentName: 'currentNameSub'
		});
	}
	render(){
		//console.log(this.props);
		return (
			<div>
				{this.props.name}
				{/*<TestSubSub name={this.state.currentName}/>*/}
				
			</div>
		);
	}
};

export default TestSub;