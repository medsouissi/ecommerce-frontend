import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/src/pages/Register.jsx' element={<Register/>} />
        <Route path='/src/pages/Login.jsx' element={<Login/>} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);