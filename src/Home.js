import React from 'react'
import FeaturedMovie from './featuredMovie';
import Hero from './Hero';
import Arrival from './nwarrival';
import People from './people';
import TV from './TV';
import Footer from './footer';


const Home = () => {
  return (
    <div>
    <Hero />
    <FeaturedMovie />
    <Arrival />
    <TV />
    <People />
    <Footer />
    </div>
  )
}

export default Home