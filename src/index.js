import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EditItem from './components/EditItem';
import App from './App';
//import Table from './components/Table';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={EditItem} />
      </div>
  </Router>,
  document.getElementById('root')
);