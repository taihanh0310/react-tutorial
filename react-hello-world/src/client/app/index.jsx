import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import TableRow from './TableRow.jsx';
import ExampleState from './ExampleState.jsx';
import UpdateClock from './UpdateClock.jsx';
import Test from './test.jsx';

class App extends React.Component {

	// function contructor
	constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }

	// function render
	render(){
		return (
			<div>
				{/*<h1>Header</h1>
				<h2>Content</h2>
				<p>This is the content!!!</p>
				<h3> 1 + 1 = {1+1} </h3>
				<AwesomeComponent/>
				<h2> Render table </h2>
				<table>
					<tbody>
						{this.state.data.map((person,i) => <TableRow key = {i} data = {person} />)}
					</tbody>
				</table>

				<h2>Example state</h2>
				<ExampleState/>

				<UpdateClock/>*/}
				<Test/>
			</div>
		)
	}
}


/*
* Render source vao the div cua id la app
*/
render(<App/>, document.getElementById('app'));