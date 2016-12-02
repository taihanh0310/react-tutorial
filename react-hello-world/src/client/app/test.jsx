import React, {Component} from 'react';

import TestSub from './Test2.jsx';

class Test extends Component{
	constructor(){
		super();
		this.state = {
			example: 'example'
		};
	}
	componentWillMount(){
		//console.log('componentWillMount');
	}
	componentDidMount(){
		//console.log('componentDidMount');
	}
	_onClick(){
		this.setState({
			example: 'example2'
		});
	}
	render(){
		//console.log('render');
		return(
			<div>
				Test {this.state.example}
				<TestSub name={this.state.example}/>
				<button onClick={this._onClick.bind(this)}>Click!!!</button>
			</div>
		)
	}
};

export default Test;