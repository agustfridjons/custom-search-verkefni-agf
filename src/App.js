import React from 'react'
import './App.scss';

import { Route, Switch } from "react-router-dom"

import Header from './components/header/Header'
import SearchEngine from './routes/searchengine/SearchEngine';
import About from './routes/about/About';

function App() {
  return (
    <>
    <Header/>
    <main className="mainpage">
      <Switch>
        <Route exact path="/" component={SearchEngine} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
    </>
  );
}

export default App;
