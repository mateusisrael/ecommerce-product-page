import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Layout from './components/templates/Layout';
import {
  Routes, Route, BrowserRouter as Router
} from 'react-router-dom';
import ProductPage from './pages/Product';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path={'/'} element={<h1>Init</h1>} />
          <Route path={'/product/:id'} element={<ProductPage />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);