import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/global/Header'
import Home from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';
import Footer from './components/global/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path={'/'} component={Home} />

        <Route path={'/home'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/how_to_play'} component={Rules} />
        <Footer />
      </Router>
    );
  }
}

export default App;
