import React from 'react';
import movies from './../../movies.js';

import { Link } from 'react-router-dom';

const MovieList = () => {
	return (
		<nav className="movie-list">
     {
				movies.map((movie) => (
					<Link key={movie.id} to={`/movies/${movie.id}`}>{movie.title} ||</Link>
				))
			} 
    </nav>
	)
}

export default MovieList;