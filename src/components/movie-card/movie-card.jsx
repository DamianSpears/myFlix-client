export const MovieCard = ({ movie, onMovieClick }) => {
   return <div onClick={() => {onMovieClick(movie);   //the onmovieClick(movie) will send data from any clicked title and pass it to the function in the main view
   }}      //onmovieCLick allows each 'movie.title' to have a clickable option in order to change setSelectedmovie to newSelectedmovie
   >
      {movie.title}</div>
};
//The movieCard now iterates through each item and adds a click option, which presents the specififc information for that movie