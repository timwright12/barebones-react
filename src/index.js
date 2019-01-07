// React
import React from 'react';
import ReactDOM from 'react-dom';

// Global styles
import './stylesheets/index.css';

// Components
import Header from './components/header/header';
import Footer from './components/footer/footer';

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
