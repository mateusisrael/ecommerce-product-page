import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Layout from './components/templates/Layout';
import {
  Routes, Route, BrowserRouter as Router
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path={'/'} element={<h1>Init</h1>} />
          <Route path={'/schedule'} element={<h1>Schedule</h1>} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);