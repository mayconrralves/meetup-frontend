import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { csrfUpdate } from '../store/modules/auth/actions';
import Route from './Router';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import Details from '../screens/Details';
import NotFound from '../screens/NotFound';




export default () => {
	const dispatch = useDispatch();
	 useEffect(()=>{
	 	dispatch(csrfUpdate());
	 },[]);
	return (
		<Switch>
			<Route path='/' exact component={SignIn}/>
			<Route path='/signup' exact component={SignUp} />
			<Route path='/dashboard' exact component={Dashboard} isPrivate/>
			<Route path='/details/:id' exact component={Details} isPrivate/>
			<Route component={NotFound}/>
		</Switch>
		)

}