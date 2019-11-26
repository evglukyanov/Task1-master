import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import Booklist from './booklist'
import Bookinfo from './bookinfo';
const routing = (
    <Router>
      <div>
          <Switch>
        <Route exact path="/" component={App} />
        <Route path="/books" component={Booklist} />
        <Route path="/book/:id" component={Bookinfo} />
        </Switch>
      </div>
    </Router>
  )



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
