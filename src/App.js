import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <Router className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/booking/destination/:dest_id">
          <Booking></Booking>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
