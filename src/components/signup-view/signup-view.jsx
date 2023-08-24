import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"

export const SignupView = () => {   //below are the state variables for each Form.Control so we can access their values
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [birthday, setBirthday] = useState("");

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
         if (response.ok) {
            alert("Signup Successful");
            window.location.reload();
         } else {
            alert("Signup Failed")
         }
      });
   };
   return (    //This is basicvally everything from vanilla React but using Bootstrap
      <Form onSubmit={handleSubmit}>
         <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
               type="text"  //'type' and 'onChange' are properties that will use the state variable "username" and "setUsername" from the useState Hook
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               required
            />
         </Form.Group>
         <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
            />
         </Form.Group>
         <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
            />
         </Form.Group>
         <Form.Group controlId="formBirthday">
            <Form.Label>Birthday:</Form.Label>
               <Form.Control
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  required
               />
         </Form.Group>
         <Button variant="primary" type="submit">
            Submit
         </Button>
      </Form>
   )
}