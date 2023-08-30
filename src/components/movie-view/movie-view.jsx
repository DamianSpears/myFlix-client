import "./movie-view.scss";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './movie-view.scss';


export const MovieView = ({ movies }) => {
   const { movieTitle } = useParams(); // movieTitle is a URL parameter within the main-view component, useParams takes the URL request from MovieCard and applies it to the HTTP request
   
   const movie = movies.find((movie) => movie.Title === movieTitle) //the movie variable serches through the array of movies and returns a matching movieId based off of the parameters provided.
   ;
   return (
      <div className="movie-view-body">
         <div>
            <img src={movie.ImagePath} className="movie-image" />
         </div>
         <p></p>
         <div>
            <span>Title: </span>
            <span>{movie.Title}</span>
         </div>
         <p></p>
         <div>
            <span>Director: </span>
            <span>{movie.Director}</span>
         </div>
         <p></p>
         <div>
            <span>Description: </span>
            <span>{movie.Description}</span>
         </div>
         <p></p>
         <div>
            <span>Genre: </span>
            <span>{movie.Genre[0].Style}</span>
            <p></p>
            <span>Genre Description: </span>
            <span>{movie.Genre[0].Description}</span>
         </div>
         <Link to={'/'}>
            <button className="back-button">Back</button>
         </Link>
      </div>
   );
};

//Defining prop constraints for MovieView below (what it should look like)
MovieView.propTypes = {
   movie: PropTypes.shape({
      //.shape is used to determine how the prop is supposed to look
      ImagePath: PropTypes.string,
      Title: PropTypes.string,
      Director: PropTypes.string,
      Description: PropTypes.string,
      Genre: PropTypes.shape({
         Style: PropTypes.string,
         Description: PropTypes.string
      })
   })
};