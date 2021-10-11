import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import TodosPage from './pages/TodosPage'
import EditTodo from './pages/EditTodo';
import User from './pages/User';

export default function App () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/todos" component={TodosPage}/>
          <Route path="/edit/:id" component={EditTodo}/>
          <Route path="/user/:id" component={User}/>
        </Switch>
      </Router>
    )
}