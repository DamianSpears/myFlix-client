import React from "react";
import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card"
import { MovieView } from "../movie-view/movie-view"
import { LoginView } from "../login-view/login-view"
import { SignupView } from "../signup-view/signup-view"
import { NavigationBar } from "../navigation-bar/navigation-bar"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; //imports Routes, Route, Navigate and BrowserRouter

//This is the first 'MainView' component
export const MainView = () => {     //The 'export' keyword exposes MainView so it can be used by other components. It is assigned a function that returns the code within
   const storedUser = JSON.parse(localStorage.getItem("user"));   //These are present to load a value from localStorage, if there is one
   const storedToken = localStorage.getItem("token");
   const [movies, setMovies] = useState([]);    //useState always takes two values, the first is the current 'state' and the second is the function to update the state
   //the 'useState' hook allows you to create and initialize a new state for a component
   //useState returns destructured values to be used as variables. 'movies' is the array of movies, and 'setmovies' is a method that updates the 'movies' array
   const [user, setUser] = useState(storedUser ? storedUser : null);   //This state variable has been added to keep track of whether a user is logged in or not
   const [token, setToken] = useState(storedToken ? storedToken : null);

   useEffect(() => {
      if (!token) {
         return;
      }
      fetch("https://pure-anchorage-69426-fa1526ceaf46.herokuapp.com/movies", {
         headers: { Authorization: `Bearer ${token}` } //this 'dependency array' ensures 'fetch' is called everytime token changes
      })
         .then((response) => response.json())
         .then((movies) => {
            setMovies(movies);
         });
   }, [token]); //<-- the dependency is now on "token", so fetch will update everytime token changes

   return (    //This new return statement essentially consolidates all of the previous if statements into one return in order to structure them with React components
      <BrowserRouter>
      <NavigationBar
         user={user}
         onLoggedOut={() =>{
            setUser(null);
            localStorage.clear();
         }}
      />
         <Row className="justify-content-md-center">
            <Routes>
               <Route
                  path="/signup" //"path" props express the URL that should match
                  element={   //what to render when the URL is called
                     <>
                        {user ? (   //the Navigate component is added in each Route to redirect unauthenticated users
                           <Navigate to="/" />
                        ) : (
                           <Col md={5}>
                              <SignupView />
                           </Col>
                        )}
                     </>
                  }
               />

               <Route
                  path="/login"
                  element={
                     <>
                        {user ? (
                           <Navigate to="/" />
                        ) : (
                           <Col md={5}>
                              <LoginView onLoggedIn={(user, token) => {
                                 setUser(user);
                                 setToken(token);
                              }} />
                           </Col>
                        )}
                     </>
                  }
               />

               <Route
                  path="/movies/:movieTitle"
                  element={
                     <>
                        {!user ? (
                           <Navigate to="/login" replace />
                        ) : movies.length === 0 ? (
                           <Col>The list is empty!</Col>
                        ) : (
                           <Col md={8}>
                              <MovieView movies={movies} />
                           </Col>
                        )}
                     </>
                  }
               />

               <Route
                  path="/"
                  element={
                     <>
                        {!user ? (
                           <Navigate to="/login" replace />
                        ) : movies.length === 0 ? (
                           <Col> The list is empty! </Col>
                        ) : (
                           <>
                              {movies.map((movie) => (
                                 <Col className="mb-4" key={movie.Title} md={3}>
                                    <MovieCard movie={movie} />
                                 </Col>
                              ))}
                           </>

                        )}
                     </>
                  }
               />
            </Routes>
         </Row>
      </BrowserRouter>
   );
};