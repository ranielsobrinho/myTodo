import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import TodosPage from './pages/TodosPage'

export default function App () {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/todos" component={TodosPage}/>
        </div>
      </Router>
    )
}