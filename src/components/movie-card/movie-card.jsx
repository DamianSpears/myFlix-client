import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";   //since React Bootstrap was imported, we can now import Bootstrap components into the Movie cards

export const MovieCard = ({ movie, onMovieClick }) => {
   return ( //This new Return statement incorporates React Bootstrap compnents "Card.Body" and "Card.Img" in order to create a new Movie Card with child components
      <Card className="h-100">
         <Card.Img variant="top" src={movie.ImagePath} />
         <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Director}</Card.Text>
            <Button onClick={() => onMovieClick(movie)} variant="link">
               Open
            </Button>
         </Card.Body>
      </Card>
   );
};
//The movieCard now iterates through each item and adds a click option, which presents the specififc information for that movie

MovieCard.propTypes = {
   movie: PropTypes.shape({
      //.shape is used to determine how the prop is supposed to look
      ImagePath: PropTypes.string,
      Title: PropTypes.string,
      Director: PropTypes.string
   }).isRequired,
   onMovieClick: PropTypes.func.isRequired
};
