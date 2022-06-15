import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'
// import './App.css';
import Layout from './Layout/Layout';
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
