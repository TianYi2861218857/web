import React,{Component} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from 'pages/login'

class App extends Component{
	render(){
		return(
			<Router>
				<div className='App'>
					<Route path='/login' component={Login} />
				</div>
			</Router>
		)
	}
}

export default App