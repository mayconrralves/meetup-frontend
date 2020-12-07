import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles';
import history from './services/history';
import Routes from './Routes';
import { store } from './store';
function App() {
  return (
  		<Provider store={store}>
	  		<Router history={history}>
	  			<GlobalStyle/>
	  			<Routes />
	  		</Router>
	  	</Provider>
    	
  
  );
}

export default App;
