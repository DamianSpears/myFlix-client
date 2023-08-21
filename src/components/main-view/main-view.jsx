import React from "react";
import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card"
import { MovieView } from "../movie-view/movie-view"
import { LoginView } from "../login-view/login-view"
import { SignupView } from "../signup-view/signup-view"
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

//This is the first 'MainView' component
export const MainView = () => {     //The 'export' keyword exposes MainView so it can be used by other components. It is assigned a function that returns the code within
   const storedUser = JSON.parse(localStorage.getItem("user"));   //These are present to load a value from localStorage, if there is one
   const storedToken = localStorage.getItem("token");
   const [movies, setMovies] = useState([]);    //useState always takes two values, the first is the current 'state' and the second is the function to update the state
   //the 'useState' hook allows you to create and initialize a new state for a component
   //useState returns destructured values to be used as variables. 'movies' is the array of movies, and 'setmovies' is a method that updates the 'movies' array
   const [selectedMovie, setSelectedMovie] = useState(null);   //Created second state variable to display the MovieView component upon a 'click'
   const [user, setUser] = useState(storedUser ? storedUser : null);   //This state variable has been added to keep track of whether a user is logged in or not
   const [token, setToken] = useState(storedToken ? storedToken : null);

   useEffect(() => {
      if (!token) return;

      fetch("https://pure-anchorage-69426-fa1526ceaf46.herokuapp.com/movies", {
         headers: { Authorization: `Bearer ${token}` } //this 'dependency array' ensures 'fetch' is called everytime token changes
      })
         .then((response) => response.json())
         .then((movies) => {
            setMovies(movies);
         });
   }, [token]); //<-- the dependency is now on "token", so fetch will update everytime token changes

   return (    //This new return statement essentially consolidates all of the previous if statements into one return in order to structure them with React components
      <Row className = "justify-content-md-center">  
         {!user ? (
            <Col md={5}>
               <LoginView onLoggedIn={(user, token) => {
                  setUser(user);
                  setToken(token);
               }} />
               or
               <SignupView />
            </Col>
         ) : selectedMovie ? (
            <Col md={8} style={{ border: "1px solid black" }}>
               <MovieView
                  style={{ border: "1px solid green" }}
                  movie={selectedMovie}
                  onBackClick={() => setSelectedMovie(null)}  //MovieView receives two props when selectedMovie becomes true, revealing the movie information
               />
            </Col>
         ) : movies.length === 0 ? (
            <div>The list is empty</div>
         ) : (
         <>
            {movies.map((movie) => (     //the map method assigns each elements in the 'movies' array to a piece of UI, which allows each title to be displayed
               <Col className="mb-5" key={movie.id} md={3}>
                  <MovieCard
                     movie={movie}
                     onMovieClick={(newSelectedMovie) => {    //onMovieClick is waiting to receive data from any movie-card item that is clicked in order to change the setSelectedMovie
                        setSelectedMovie(newSelectedMovie);
                     }}
                  />
               </Col>
            ))}
         </>
      )
   }
      </Row >
   )};