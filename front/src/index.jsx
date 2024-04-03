import './styles/index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Dashboard from './pages/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route path='/:id' element={ <Dashboard /> } />
      </Routes>
    </Router>
  </React.StrictMode>
);
