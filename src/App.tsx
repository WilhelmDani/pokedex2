import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import {Home} from './Home';
import {Example} from './Example';

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
        <nav>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/example">Example</Link>
        </nav>
          <Switch>
            <Route path='/example'>
              <Example />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
