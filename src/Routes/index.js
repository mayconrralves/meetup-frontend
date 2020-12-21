import React from 'react';
import { useDispatch} from 'react-redux';
import { Switch } from 'react-router-dom';
import Route from './Router';
import { csrfUpdate } from '../store/modules/auth/actions';


import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import Details from '../screens/Details';
import EditMeet from '../screens/EditMeet';
import NewMeet from '../screens/NewMeet';
import NotFound from '../screens/NotFound';


export default function Routes () {
	const dispatch = useDispatch();
	dispatch(csrfUpdate());
	
	return (
		<Switch>
			<Route path='/' exact component={SignIn}/>
			<Route path='/signup' exact component={SignUp} />
			<Route path='/dashboard' exact component={Dashboard} isPrivate/>
			<Route path='/profile' exact component={Profile} isPrivate/>
			<Route path='/details/:id' exact component={Details} isPrivate/>
			<Route path='/meet/new' exact component={NewMeet} isPrivate/>
			<Route path='/meet/edit/:id' exact component={EditMeet} isPrivate/>
			<Route component={NotFound}/>
		</Switch>
		)

}