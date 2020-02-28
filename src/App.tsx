import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import {Home} from './Home';
import { PokemonList } from './PokemonList';
import { AddPokemon } from './AddPokemon';


const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
        <nav>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/pokemon/list">Pokemon</Link>
          <br/>
          <Link to="/pokemon/add">Add a Pokemon</Link>
        </nav>
          <Switch>
          <Route path='/pokemon/list'>
              <PokemonList/>
            </Route>
            <Route path='/pokemon/add'>
              <AddPokemon/>
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
