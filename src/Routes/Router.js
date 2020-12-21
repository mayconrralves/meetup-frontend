import React from 'react';

import { Route, Redirect  } from 'react-router-dom';
import { store } from '../store';
export default function Router( { component: Component, isPrivate, path, ...rest } ) {
	
	const { signed } = store.getState().auth;
	const{ csrf } = store.getState().auth;

	if(!signed && isPrivate && csrf){
		return <Redirect to='/'  />
	}
	if(signed && !isPrivate ){
		return <Redirect to={path} />
	}
	return <Route {...rest} render={props=>(
		<Component {...props} /> 
		)}/>
}