import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
   return ( <div onClick={() => {onMovieClick(movie);   //the onmovieClick(movie) will send data from any clicked title and pass it to the function in the main view
   }}      //onMovieCLick allows each 'movie.title' to have a clickable option in order to change setSelectedmovie to newSelectedmovie
   >
      {movie.Title}
   </div>
   );
};
//The movieCard now iterates through each item and adds a click option, which presents the specififc information for that movie

//Defining prop constraints for MovieCard below (what it should look like)
MovieCard.propTypes = {
   movie: PropTypes.shape({
     //.shape is used to determine how the prop is supposed to look
     _id: PropTypes.string,
     Title: PropTypes.string,
     Director: PropTypes.string,
     Genre: PropTypes.shape({
      Style: PropTypes.string,
      Description: PropTypes.string
   })
   }).isRequired,
   onMovieClick: PropTypes.func.isRequired
 };