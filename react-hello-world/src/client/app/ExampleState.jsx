import React from 'react'

class ExampleState extends React.Component {

	//contructor
	constructor(props) {
	    super(props);
	    this.state = {date: new Date()};
  	}

  	render(){
  		return (
  			<h2>It is {this.state.date.toLocaleTimeString()}</h2>
  		)
  	}
}

export default ExampleState;