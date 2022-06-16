import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import Product from './Product';

function App() {
  return (
    <BrowserRouter>
      <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/product/1">Product 1</Link>
        <Link to="/product/2">Product 2</Link>
        <Link to="/product/3">Product 3</Link>
      </div>
      <Routes>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
