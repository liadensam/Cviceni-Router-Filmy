import React from 'react';
import movies from './../../movies.js';

const MovieList = () => {
	return (
		<nav className="movie-list">
			{
				movies.map((movie) => (
					<p key={movie.id}>{movie.title}</p>
				))
			}
    </nav>
	)
}

export default MovieList;