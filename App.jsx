import React from 'react'
import "./App.css";
import Fire from "../../images/fire.jpeg";
import Star from "../../images/star.jpeg";
import Party from '../../images/party.jpg';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';
const App = () => {
  return (
    <div className='app'>
   <Navbar/>
  <MovieList type="popular" title="Popular" emoji={Fire}/>
  <MovieList type="top_rated" title="Top Rated" emoji={Star}/>
  <MovieList type="upcoming" title="Upcoming" emoji={Party}/>

      <main>Main Content</main>
    </div>
  )
}

export default App