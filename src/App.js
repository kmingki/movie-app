import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import About from "./routes/About";
import Navigation from './components/Navigation.js';
import "./App.css";

function App(){
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
}

export default App;

