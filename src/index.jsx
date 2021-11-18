import React from 'react';
import { render } from 'react-dom';

import MovieList from './components/MovieList'
import Movie from './components/Movie';

import './style.css';

const App = () => {
  return (
    <>
     <h1>Movies</h1>

      <MovieList />
    </>
  );
}

render(<App />, document.querySelector('#app'));
