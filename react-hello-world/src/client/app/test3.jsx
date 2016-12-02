import React, {Component} from 'react';

class TestSubSub extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentName: 'currentName'
		};
	}
	render(){
		return (
			<div>
				Sub sub<br/>
				{this.props.name}
			</div>
		);
	}
};

export default TestSubSub;