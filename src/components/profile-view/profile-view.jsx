import { Row, Col, Container, Button, Card, Form } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

export const ProfileView = ({ user, token }) => {

   const deleteAccount = () => {
      fetch("https://pure-anchorage-69426-fa1526ceaf46.herokuapp.com/users/" + user.Username, {
         method: "DELETE",
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
         }}
      )}

   return (
      <Card className="h-100 border-dark rounded">
         <Card.Body className="rounded">
            <Card.Title>All your data:</Card.Title>
            <p></p>
            <Card.Text>Username: {user.Username}</Card.Text>
            <br></br>
            <Card.Text>Email: {user.Email}</Card.Text>
            <br></br>
            <Card.Text>Birthday: {user.Birthday}</Card.Text>
            <br></br>
            <Card.Text>Favorite Movies: {user.FavoriteMovies}</Card.Text>
            <br></br>
            <Link to={'/users/updateUser'}>
               <Button variant="link">
                  Update Information
               </Button>
            </Link>
            <Button
               className='delete-btn'
               variant='btn btn-danger'
               onClick={() => {
                  deleteAccount();
               }}>
               Delete Account
            </Button>
            <Card.Text></Card.Text>
         </Card.Body>
      </Card >

   );
};