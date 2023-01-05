import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/NavBar';
import Experience from './pages/Experience';
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
          
        <Route exact path="/experience" component={Experience} />

        <Route exact path="/projects" component={Projects} />

        <Route exact path="/resume">

        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
