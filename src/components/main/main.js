import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import Home from '../../templates/home/home';
import About from '../../templates/about/about';

/**
 * Main component
 */
const Main = () => (

	<main className="main" role="main">
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
		</Switch>
	</main>

);

export default Main;
