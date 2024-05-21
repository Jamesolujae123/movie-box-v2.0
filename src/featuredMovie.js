import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import imdb from "../src/assests/imdb.svg"
import tomato from "../src/assests/tomato.svg"
import "./featured.css"

const FeaturedMovie = () => {
    const [movies, setMovies] = useState(null);

    
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWQ4OWFhZjNjM2FkYjdiODc2MWYzMWJlZTYwZDIyZCIsInN1YiI6IjY2MzhkMjMzMmZhZjRkMDEyYWM2NjhmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z5XIw2tuyaTVvs8oeULS7Fn9vqmK_XtUogCmAQ4BcqE"

const headers = {
    Authorization: `Bearer ${token}`, };

    
  const fetchMovie = async () => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/movie/top_rated", {headers}
        );
        console.log(response.data.results);
        setMovies(response.data.results)
    } catch (errors) {
        console.log(errors)
    }
  } 
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const genres ="https://api.themoviedb.org/3/genre/movie/list";

  useEffect (() => {fetchMovie()}, []);

  


// let genre = [{action: }, {thriller}, {horror}];
// console.log(genre.toString());


  return (
<div className='featured-cont'>
<h2>Featured Movies</h2>
    <div className='movie-cont'>



       {movies?.slice(0,4).map((movie)=> (
<div className='moviecard'>
    <img className='movieimg' src={`${imageBaseUrl}/${movie?.poster_path}`} alt='' />
    <h4>{movie?.title}</h4>
    <div className='ratings-card'>
    <div className='rating-card'>
        <img src={imdb} alt='imdb'/>
        <small>90/100</small>
    </div>
    <div className='rating-card'>
    <img src={tomato}  alt='tomato'/>
    <small>75%</small>
    </div>
</div>
    
    </div>
       ))}
    </div>

</div>
  )
}


export default FeaturedMovie