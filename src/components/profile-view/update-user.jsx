import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"

export const UpdateUser = ({ user, token, updatedUser }) => {   //below are the state variables for each Form.Control so we can access their values
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [birthday, setBirthday] = useState("");

   useEffect(() => {
      fetch("https://pure-anchorage-69426-fa1526ceaf46.herokuapp.com/users/" + user.Username, {
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
         }
      }).then((res) => {
         return res.json();
      }).then((res) => {
         setUsername(res.Username);
         setPassword(res.Password);
         setEmail(res.Email);
         setBirthday(res.Birthday);
      });
   }, []);

   const handleSubmit = (event) => {
      event.preventDefault();

      const data = {
         Username: username,
         Password: password,
         Email: email,
         Birthday: birthday
      };

      fetch("https://pure-anchorage-69426-fa1526ceaf46.herokuapp.com/users/" + user.Username, {
         method: "PUT",
         body: JSON.stringify(data),
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
         }
      }).then((response) => response.json())
         .then((user) => {
            if (user) {
               console.log(user);
               updatedUser(user);
               alert('All updated, my friend!');
            }
         })
   };


   return (    //This is basically everything from vanilla React but using Bootstrap
      <Form onSubmit={handleSubmit}>
         <Form.Group controlId="formUsername">
            <Form.Label>Current Username:</Form.Label>
            <Form.Control
               type="text"  //'type' and 'onChange' are properties that will use the state variable "username" and "setUsername" from the useState Hook
               value={username}
               onChange={(e) => setUsername(e.target.value)}
            />
         </Form.Group>
         <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
         </Form.Group>
         <Form.Group controlId="formEmail">
            <Form.Label>Current Email:</Form.Label>
            <Form.Control
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
         </Form.Group>
         <Form.Group controlId="formBirthday">
            <Form.Label>Current Birthday:</Form.Label>
            <Form.Control
               type="date"
               value={birthday}
               onChange={(e) => setBirthday(e.target.value)}
            />
         </Form.Group>
         <Button variant="primary" type="submit">
            Update
         </Button>
      </Form>
   )
}