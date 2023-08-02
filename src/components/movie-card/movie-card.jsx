import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
   return ( <div onClick={() => {onMovieClick(movie);   //the onmovieClick(movie) will send data from any clicked title and pass it to the function in the main view
   }}      //onmovieCLick allows each 'movie.title' to have a clickable option in order to change setSelectedmovie to newSelectedmovie
   >
      {movie.title}
   </div>
   );
};
//The movieCard now iterates through each item and adds a click option, which presents the specififc information for that movie

//Defining prop constraints for MovieCard below (what it should look like)
BookCard.propTypes = {
   book: PropTypes.shape({
     //.shape is used to determine how the prop is supposed to look
     title: PropTypes.string.isRequired,
     director: PropTypes.string.isRequired,
     genre: PropTypes.shape({
      style: PropTypes.string,
      description: PropTypes.string
   })
   }).isRequired,
   onBookClick: PropTypes.func.isRequired
 };