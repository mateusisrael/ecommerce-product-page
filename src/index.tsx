import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Layout from './components/templates/Layout';
import { ProductPage, Home } from './pages';

import {
  Routes, Route, BrowserRouter as Router
} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/product/:id'} element={<ProductPage />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);