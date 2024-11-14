import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Global styles
import './stylesheets/index.css';

// Components
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

/**
 * App component
 */
class App extends React.Component {
  /**
	 * Standard render method
	 */
  render() {
    return (
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

if (typeof window !== 'undefined') {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
