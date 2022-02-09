import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import './App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;