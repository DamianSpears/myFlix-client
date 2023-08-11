// username: 167OLdP5BUfLZGxP
// password: K39eKYhPMV9DDWhJ

import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const handleSubmit = (event) => {
      //handleSubmit is a variable that stops the default behavior of the form, fetches the login API, and passes the username and password as a JSON dictionary
      event.preventDefault();
      const data = {       //"data" will contain both the username and password to be used in the request body to search for a user in the "user" database
         Username: username,
         Password: password
      };
      fetch("https://pure-anchorage-69426-fa1526ceaf46.herokuapp.com/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(data) // method, headers and body are different parts of the "/login" request
      })
         .then((response) => response.json())   //turns the response content into JSON so the JWT can be extracted
         .then((data) => {
            console.log("Login response: ", data);
            if (data.user) {
               localStorage.setItem("user", JSON.stringify(data.user)); //stores default value of "user" in local storage
               localStorage.setItem("token", data.token); //stores "token" in local storage as well
               onLoggedIn(data.user, data.token);
            } else {
               alert("No such user");
            }
         })
         .catch((e) => {
            alert("Something ain't right");
         });
   };
   return (    //below is the onSubmit callback that applies the handleSubmit function
      <form onSubmit={handleSubmit}>
         <label>
            Username:
            <input
               type="text"  //'type' and 'onChange' are properties that will use the state variable "username" and "setUsername" from the useState Hook
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               required
            />
         </label>
         <label>
            Password:
            <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
            />
         </label>
         <button type="submit">
            Submit
         </button>
      </form>
   );
};