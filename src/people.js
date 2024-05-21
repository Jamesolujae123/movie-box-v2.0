import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./people.css"


const People = () => {
  
  
    const [people, setPeople] = useState(null);

    
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWQ4OWFhZjNjM2FkYjdiODc2MWYzMWJlZTYwZDIyZCIsInN1YiI6IjY2MzhkMjMzMmZhZjRkMDEyYWM2NjhmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z5XIw2tuyaTVvs8oeULS7Fn9vqmK_XtUogCmAQ4BcqE"

const headers = {
    Authorization: `Bearer ${token}`, };

    
  const fetchPeople = async () => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/person/popular", {headers}
        );
        console.log(response.data.results);
        setPeople(response.data.results)
    } catch (errors) {
        console.log(errors)
    }
  } 
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const genres ="https://api.themoviedb.org/3/genre/movie/list";

  useEffect (() => {((fetchPeople()))}, []);


  
    return (
    <div className='people'>

<h2>Featured Casts</h2>
    <div className='people-cont'>



       {people?.slice(0,4).map((people)=> (
<div className='profilecard'>
    <img className='profileimg' src={`${imageBaseUrl}/${people?.profile_path}`} alt='' />
    <h4>{people?.name}</h4>
    </div>
       ))}
    </div>


    </div>
  )
}

export default People