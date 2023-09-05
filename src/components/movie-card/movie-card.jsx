import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";   //since React Bootstrap was imported, we can now import Bootstrap components into the Movie cards
import { Link } from "react-router-dom";
import "./movie-card.scss";
import { useState } from "react";

export const MovieCard = ({ movie, movies, user, token, updatedUser }) => {
   //State for saving favorite movies
   const [isFavorite, setIsFavorite] = useState(
    user.FavoriteMovies.includes(movie._id)
  );


   //Add Favorite Movie
   const addFavoriteMovie = () => {
      fetch("https://pure-anchorage-69426-fa1526ceaf46.herokuapp.com/users/" + user.Username + "/movies/" + movie._id, {
         method: "POST",
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
         }
      }).then((response) => {
         if (response.ok) {
            alert("Added to favorites")
            return response.json();
         } else {
            return false;
         }
      }).then((user) => {
         if (user) {
            setIsFavorite(true);
            updatedUser(user);
         }
      }).catch((e) => {
         alert("Something ain't right", e);
      });
   }

   //Remove favorite
   const removeFavoriteMovie = () => {
      fetch("https://pure-anchorage-69426-fa1526ceaf46.herokuapp.com/users/" + user.Username + "/movies/" + movie._id, {
         method: "DELETE",
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
         }
      }).then((response) => {
         if (response.ok) {
            alert("Removed from favorites")
            console.log(response);
            return response.json();
         } else {
            return true;
         }
      })
      .then((user) => {
         if (user) {
            setIsFavorite(false);
            updatedUser(user);
         }
      }).catch((e) => {
         alert("Something ain't right", e);
      });
   }

   return ( //This new return statement incorporates React Bootstrap components "Card.Body" and "Card.Img" in order to create a new Movie Card with child components
      <Card className="h-100 border-dark rounded bg-dark">
         <Card.Img variant="top" src={movie.ImagePath} />
         <Card.Body className="rounded-bottom"  //"Title", "Text", and "Link" below are all child components of the Card Body
         >
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Director}</Card.Text>
            <Link to={`/movies/${movie.Title}`} //encodeURIComponent makes non-alphanumeric characters URL friendly
            >
               <Button variant="link">Open</Button>
            </Link>
            <div onClick={addFavoriteMovie}>+</div>
            <div onClick={removeFavoriteMovie}>-</div>
         </Card.Body>
      </Card>
   );
}
//The movieCard now iterates through each item and adds a click option, which presents the specififc information for that movie
MovieCard.propTypes = {
   movie: PropTypes.shape({
      //.shape is used to determine how the prop is supposed to look
      ImagePath: PropTypes.string,
      Title: PropTypes.string,
      Director: PropTypes.string
   }).isRequired
};
