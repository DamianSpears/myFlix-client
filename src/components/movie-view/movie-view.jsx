import "./movie-view.scss";
import PropTypes from "prop-types";


export const MovieView = ({ movie, onBackClick }) => {
   return (
      <div>
         <div>
            <img src={movie.ImagePath} />
         </div>
         <div>
            <span>Title: </span>
            <span>{movie.Title}</span>
         </div>
         <div>
            <span>Director: </span>
            <span>{movie.Director}</span>
         </div>
         <span>Description: </span>
         <span>{movie.Description}</span>
         <div>
            <span>Genre: </span>
            <span>{movie.Genre[0].Style}</span>
            <br></br>
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