import { useState } from "react";

export const SignupView = () => {   //below are the state variables for each input so we can access their values
   const[username, setUsername] = useState("");
   const[password, setPassword] = useState("");
   const[email, setEmail] = useState("");
   const[birthday, setBirthday] = useState("");

   const handleSubmit = (event) => {
      event.preventDefault();

      const data = {
         Username: username,
         Password: password,
         Email: email,
         Birthday: birthday
      };

      fetch("https://pure-anchorage-69426-fa1526ceaf46.herokuapp.com/users", {
         method: "POST",
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json"
         }
      }).then((response) => {
         if(response.ok) {
            alert("Signup Successful");
            window.location.reload();
         } else {
            alert("Signup Failed")
         }
      });
   };
   return (
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
         <label>
            Email: 
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
         </label>
         <label>
            Birthday: 
            <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
            />
         </label>
         <button type="submit">Submit</button>
      </form>
   )
}