import React,{Component} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {getUsername} from 'util'
import Login from 'pages/login'
import Home from 'pages/home'
import Err from 'common/err'

class App extends Component{
	render(){
		const HomeRoute = ({component:Component,...rest})=>{
			return (
				<Route
					{...rest}
					render={(props)=>{
						return getUsername() ? <Component /> : <Redirect to='/login' />
					}}
				/>
			)
		}
		const LoginRoute = ({component:Component,...rest})=>{
			return (
				<Route
					{...rest}
					render={(props)=>{
						return getUsername() ? <Redirect to='/' /> : <Component />
					}}
				/>
			)
		}
		return(
			<Router>
				<div className='App'>
					<Switch>
						<HomeRoute exact path='/' component={Home} />
						<HomeRoute path='/user' component={Home} />
						<LoginRoute path='/login' component={Login} />
						<Route component={Err} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App