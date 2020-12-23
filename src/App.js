import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles';
import { 	ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import history from './services/history';
import Routes from './Routes';
import { store } from './store';
function App() {
  return store ? (
  	
  		<Provider store={store}>
  			
	  		<Router history={history}>
	  			<ToastContainer 
  					autoClose={3000}  
  					position="top-right" 
  					pauseOnFocusLoss={false}
  					style={{
  						opacity: 0.7,
  						color: '#fff',
  						fontSize: '1.2em',
  					}}
  			/>
	  			<GlobalStyle/>
	  			<Routes />
					
	  		</Router>
	  	
	  	</Provider>
  
  ) : (
    <h1>Loading...</h1>
  ) ;
}

export default App;
