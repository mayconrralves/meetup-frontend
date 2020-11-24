import React from 'react';
import { 
	
  	Switch,
  	useHistory
  } from 'react-router-dom';
import Route from './Router';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import NotFound from '../screens/NotFound';


export default () => {
	return (
		<Switch>
			<Route path='/' exact component={SignIn}/>
			<Route path='/signup' exact component={SignUp} />
			<Route path='/dashboard' exact component={Dashboard} isPrivate/>
			<Route component={NotFound}/>
		</Switch>
		)

}