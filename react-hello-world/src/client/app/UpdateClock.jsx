import React from 'react';

class UpdateClock extends React.Component {

	constructor(props) {
	    super(props);
	    this.currentDate = new Date();

	    this.state = {
	    				hours: this.currentDate.getUTCHours(),
	    				minutes: this.currentDate.getUTCMinutes(),
	    				seconds: this.currentDate.getUTCSeconds(),
	    				toggle: "test"
	    			  }
  	}

  	setTime(){
  		var hours = this.currentDate.getUTCHours();
  		var minutes = this.currentDate.getUTCMinutes();
  		var seconds = this.currentDate.getUTCSeconds();

	    if( hours >= 24 ){ hours -= 24; }
	    if( hours < 0   ){ hours += 12; }
	    console.log(hours);
	    hours = hours + "";
	    if( hours.length == 1 ){ hours = "0" + hours; }

      	minutes = minutes + "";
      	if( minutes.length == 1 ){ minutes = "0" + minutes; }

      	this.setState({
	      	hours: hours,
	        minutes: minutes,
	        seconds: seconds
	    });
  	}

  	componentWillMount(){
  		console.log('will mount', this.state);
  		//this.setTime();
  	}

  	componentDidUpdate(){
  		/*window.setInterval(function () {
      		this.setTime();
    	}.bind(this), 1000);*/
    	//console.log(this.state);
    	this.setTime();
  	}

  	componentDidMount(){
  		/*window.setInterval(function () {
      		this.setTime();
    	}.bind(this), 1000);*/
       	window.setInterval(() => {
    		this.setTime();
    	}, 1000);
  	}

  	_onToggle(){


  		this.setState({
  			toggle: "test 1"
  		});
  	}

	render(){
		return(
	      <div className="city-row" ref="cityRow">
	      	<span className="city-time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
	      	{this.state.toggle}
	      	<button onClick={this._onToggle.bind(this)}>Click Toggle</button>
	      </div>
	    )
	}
}


export default UpdateClock;