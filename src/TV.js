import React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios';
import "./TV.css"

const TV = () => {

    
    const [TV, setTV] = useState(null);

    
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWQ4OWFhZjNjM2FkYjdiODc2MWYzMWJlZTYwZDIyZCIsInN1YiI6IjY2MzhkMjMzMmZhZjRkMDEyYWM2NjhmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z5XIw2tuyaTVvs8oeULS7Fn9vqmK_XtUogCmAQ4BcqE"

const headers = {
    Authorization: `Bearer ${token}`, };

    
  const fetchTV = async () => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/trending/tv/day", {headers}
        );
        console.log(response.data.results);
        setTV(response.data.results)
    } catch (errors) {
        console.log(errors)
    }
  } 
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const genres ="https://api.themoviedb.org/3/genre/movie/list";

  useEffect (() => {((fetchTV()))}, []);


  return (
    <div className='TV'>

        
<h2>Exclusive Videos</h2>
    <div className='Tv-cont'>



       {TV?.slice(0,4).map((TV)=> (
<div className='tvcard'>
    <img className='tvimg' src={`${imageBaseUrl}/${TV?.poster_path}`} alt='' />
    <h4>{TV?.name}</h4>
    </div>
       ))}
    </div>

    </div>
  )
}

export default TV