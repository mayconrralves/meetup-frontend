import React from 'react';
import { 
	BrowserRouter as Router,
  	Switch,
  	Route,
  	useHistory
  } from 'react-router-dom';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';


export default () => {
	return (
		<Router>
		<Switch>
			<Route path='/' exact>
				<SignIn/>
			</Route>
			<Route path='/signup' exact>
				<SignUp/>
			</Route>
		</Switch>
	</Router>
		)

}