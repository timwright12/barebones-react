// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from './js/header';
import Footer from './js/footer';

// Global styles
import './css/index.css';

// Assemble the App from Components
class App extends React.Component {
	render() {
		return(
			<div className="page">
				<Header />
				<Footer />
			</div>
		)
	}
}

// Render the app
ReactDOM.render( <App />, document.getElementById( 'root' ) );
