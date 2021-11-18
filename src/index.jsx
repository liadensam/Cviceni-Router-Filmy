import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Movie from './components/Movie';
import movies from './movies.js';

import './style.css';

const App = () => (
  <BrowserRouter>
    <h1>Movies</h1>

    <nav>
    {
      movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))
    }
    </nav>

    <main>
      <Routes>
        {/* Tady bude <Route /> zobrazující detail filmu (komponenta Movie) */}
      </Routes>
    </main>
  </BrowserRouter>
);

render(<App />, document.querySelector('#app'));
