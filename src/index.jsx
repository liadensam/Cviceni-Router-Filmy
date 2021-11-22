import React from 'react';
import { render } from 'react-dom';

import MovieList from './components/MovieList'
import Movie from './components/Movie';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.css';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MovieList /> } />
          <Route path="/movies/:id" element={ <Movie /> } />
        </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#app'));
