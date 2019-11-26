import React from 'react';
import logo from './logo.svg';
import './App.css';
import Booklist from './booklist'
import Bookinfo from './bookinfo'
import {Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
<h1>Home</h1>
<Link to="/books">Books</Link>
    </div>
  );
}

export default App;
