import React from 'react';
import movies from './../../movies.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Movie = () => {
	// naimportuj useParams z react-router-dom
	// pomocí useParams získej id filmu předané jako parametr v adrese, která zobrazila tuto komponentu
	// podle id najdi film v poli movies (už ho máš naimportované)
	// místo komentáře dole zobraz detaily nalezeného filmu
  const { id } = useParams();


	// const movie = movies[id - 1];

  // solution with .find() !!
  const movie = movies.find((item) => item.id == id);

	return (
      <div className="movie">
        <img src={`../assets/${movie.poster}`} alt={movie.title} />
        <div className="title"><h2>{movie.title}</h2></div>
        <div className="storyline"><p>{movie.storyline}</p></div>
        <Link to="/">Back</Link> 
        {/* <Link to={'/'}>Back</Link>  */}
      </div>
	)
}

export default Movie;