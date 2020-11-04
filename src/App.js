import React from 'react';

import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import PlacesPage from './pages/UserPlacesPage';
import './App.css';

function App() {
  return (
    <Router>
        <div className="app">
           {/* <header>
            <h1>Hello Snaplace App</h1>
           </header> */}
        <Header />
        <Route path='/' exact>
        <h1>Home Page</h1>
        </Route>
        <Route path='/users'>
        <UsersPage />
        </Route>
        <Route path='/:userId/places' exact>
        <PlacesPage />
        </Route>
        </div>
    </Router>
  );
}

export default App;
