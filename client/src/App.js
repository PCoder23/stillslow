import React from "react";
import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
