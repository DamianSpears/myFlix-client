import "./movie-view.scss";
import PropTypes from "prop-types";
import './movie-view.scss';


export const MovieView = ({ movie, onBackClick }) => {
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
         <button onClick={onBackClick} className="back-button">Back</button>
      </div>
   );
};

//Defining prop constraints for MovieView below (what it should look like)
MovieView.propTypes = {
   movie: PropTypes.shape({
     //.shape is used to determine how the prop is supposed to look
     ImagePath: PropTypes.string,
     _id: PropTypes.string,
     Title: PropTypes.string,
     Director: PropTypes.string,
     Description: PropTypes.string,
     Genre: PropTypes.shape({
      Style: PropTypes.string,
      Description: PropTypes.string
   })
   }).isRequired,
   onMovieClick: PropTypes.func.isRequired
 };