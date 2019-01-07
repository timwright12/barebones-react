// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// Global styles
import './stylesheets/index.css';

// Components
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

// Assemble the App from Components
class App extends React.Component {
	render() {
		return(
			<div className="page">
				<Header />
				<Main />
				<Footer />
			</div>
		)
	}
}

// Render the app
ReactDOM.render( (
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById( 'root' ) );
