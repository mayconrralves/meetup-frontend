import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({component: Component, isPrivate, ...rest}) => {
	const signed = false;
	if(!signed && isPrivate){
		return <Redirect to='/' />
	}
	if(signed && !isPrivate){
		return <Redirect to='/dashboard'/>
	}
	return <Route {...rest} render={props=>(
		<Component {...props}/> 
		)}/>
}