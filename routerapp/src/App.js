import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './Home';
import Contract from './Contract';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/contract">Contract</Link>{' '}
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contract" element={<Contract/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
