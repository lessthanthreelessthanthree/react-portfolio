import React from 'react';
import { Header } from './components/common';
import Timeline from './components/Timeline';
import About from './components/About'
import "./fontello/css/fontello.css";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Timeline/>
      <About/>
    </div>
  );
}

export default App;
