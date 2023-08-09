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
      const data = {
         access: username,
         secret: password
      };
      fetch("https://openlibrary.org/account/login.json", {
         method: "POST",
         body: JSON.stringify(data)
      }).then((response) => {
         if (response.ok) {
            onLoggedIn(username);
         } else {
            alert("Login Failed");
         }
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
            />
         </label>
         <label>
            Password:
            <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
         </label>
         <button type="submit">
            Submit
         </button>
      </form>
   );
};