import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card"
import { MovieView } from "../movie-view/movie-view"

//This is the first 'MainView' component
export const MainView = () => {     //The 'export' keyword exposes MainView so it can be used by other components. It is assigned a function that returns the code within
   const [movies, setMovies] = useState([]);    //useState always takes two values, the first is the current 'state' and the second is the function to update the state
      //the 'useState' hook allows you to create and initialize a new state for a component
      //useState returns destructured values to be used as variables. 'movies' is the array of movies, and 'setmovies' is a method that updates the 'movies' array

   const [selectedMovie, setSelectedMovie] = useState(null); //Created second state variable to display the MovieView component upon a 'click'

   if (selectedMovie) {    //The if statement serves as a prop to transfer data to the MovieView.
      return (<MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)}  //MovieView receives two props when selectedMovie becomes true, revealing the movie information
      />);  //When onBackClick fires, it changes etselectedMovie back to null
   }

   if (movies.length === 0) {
      return <div>The list is empty</div>
   }

   useEffect(() => {
      fetch("https://pure-anchorage-69426-fa1526ceaf46.herokuapp.com/")   //fetch() returns a promise and needs a callback 'then()' in order to access it
      .then((response) => response.json())
      .then((data) => {
         const moviesFromApi = data.docs.map((doc) => {  //data.docs.map searches through the API to return values for the defined keys in the return object below
            return {
               id: doc.id,
               title: doc.title,
               director: doc.director,
               genre: [
                  doc.genre.style,
                  doc.genre.description
            ]
            }
         });
         setMovies(moviesFromApi);
      })}, []);       //<-- passing this empty array '[]' at the end tells useEffect that the callback does not depend on changes in states or props

   return (
      <div>
         {movies.map((movie) => (     //the map method assigns each elements in the 'movies' array to a piece of UI, which allows each title to be displayed
            <MovieCard 
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {    //onMovieClick is waiting to receive data from any movie-card that is clicked in order to change the setSelectedMovie
               setSelectedMovie(newSelectedMovie);   
            }}/>   //the custom 'movie' prop has been added with a value of the movie object from the function to pass data to MovieCard (child component)
         ))}
      </div>
   );
};