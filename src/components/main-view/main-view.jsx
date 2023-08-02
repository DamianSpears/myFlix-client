import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card"
import { MovieView } from "../movie-view/movie-view"

//This is the first 'MainView' function component
export const MainView = () => {     //The 'export' keyword exposes MainView so it can be used by other components. It is assigned a function that returns the code within
   const [movies, setMovies] = useState([      //useState is a 'hook' and always takes two values, the first is the current 'state variable' (movies) and the second is the function to update the state (setMovies)
   {
      id: 1,
      title: "Tenet",
      director: "Christopher Nolan",
      image: "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg",
      genre: [
            {
                Style: "Action",
                Description: "fast-paced and include a lot of action like fight scenes, chase scenes, and slow-motion shots. They can feature superheroes, martial arts, or exciting stunts.",
            }]
    },
    {
      id: 2,
      title: "Inception",
      director: "Chrisopher Nolan",
      image: "https://c8.alamy.com/comp/2C4X083/inception-2010-directed-by-christopher-nolan-and-starring-leonardo-dicaprio-joseph-gordon-levitt-ellen-page-tom-hardy-and-ken-watanabe-a-team-break-in-to-the-subconscious-of-a-businessman-using-dream-sharing-technology-in-order-a-plant-a-seed-to-influence-his-decision-in-the-real-world-2C4X083.jpg",
      genre: [
            {
                style: "Action",
                description: "fast-paced and include a lot of action like fight scenes, chase scenes, and slow-motion shots. They can feature superheroes, martial arts, or exciting stunts.",
            }]
    },
    {
      id: "64c161716290f044db676512",
        title: "Reservoir Dogs",
        director: "Quentin Tarantino",
        image: "https://target.scene7.com/is/image/Target/GUEST_04cb340e-b760-456a-8252-35449ef3fda8?wid=488&hei=488&fmt=pjpeg",
        genre: [
            {
                style: "Crime",
                description: "Most crime drama focuses on crime investigation and does not feature the courtroom. Suspense and mystery are key elements that are nearly ubiquitous to the genre.",
            }]
    },
   ]);   //the 'useState' hook allows you to create and initialize a new state for a component
   //useState returns destructured values to be used as variables. 'movies' is the array of movies, and 'setmovies' is a method that updates the 'movies' array

   const [selectedMovie, setSelectedMovie] = useState(null); //Created second state variable to display the MovieView component upon a 'click'

   if (selectedMovie) {    //The if statement serves as a prop to transfer data to the MovieView.
      return (<MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)}  //MovieView receives two props when selectedMovie becomes true, revealing the movie information
      />);  //When onBackClick fires, it changes etselectedMovie back to null
   }

   if (movies.length === 0) {     //currently, the 'movies' current state is the movie list above
      return <div>The list is empty</div>
   }

   return (
      <div>
         {movies.map((movie) => (     //the map method assigns each element in the 'movies' array to a piece of UI, which allows each title to be displayed
            <MovieCard //<-- the beginning of the 'MovieCard' prop which will pass 'key', 'movie', and 'onMovieClick' to MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {    //onMovieClick is waiting to receive data from any movie-card that is clicked in order to change the setSelectedMovie
               setSelectedMovie(newSelectedMovie);   
            }}/>   //the custom 'movie' prop has been added with a value of the movie object from the function to pass data to MovieCard (child component)
         ))}
      </div>
   );
};