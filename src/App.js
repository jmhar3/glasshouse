import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav/Nav'
import HomePage from './pages/HomePage'
import CreationsPage from './pages/CreationsPage'
import PalettePage from './pages/PalettePage'
import AccountAccess from './pages/AccountAccess'
import './App.css';
import './typography/typography.css';

const App = () => {
  return (
    <Router>
        <Nav />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/creations" component={CreationsPage} />
        <Route exact path="/palette" component={PalettePage} />
        <Route exact path="/accountaccess" component={AccountAccess} />
    </Router>
  );
};

export default App