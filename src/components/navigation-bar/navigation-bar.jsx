import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({user, onLoggedOut }) => { //This component is taking "user" and "onLoggedOut" as props
   return (
      <Navbar expand="lg">
         <Container>
            <Navbar.Brand as={Link} to="/">
               myFlix App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" // aria-controls identifies which elements are controlled by the Navbar.Toggle component
             />
            <Navbar.Collapse id="basic-navbar-nav">

               <Nav className="me-auto"// "me-auto" means margin-end auto
                >
                  {!user && ( //This is the end of the margin drop-down menu that allows the user to select either a login or signup button
                     <>
                     <Nav.Link as={Link} to="/login">
                        Login
                     </Nav.Link>
                     <Nav.Link as={Link} to="/signup">
                        Signup
                     </Nav.Link>
                     </>
                  )}
                  {user && (
                     <>
                        <Nav.Link as={Link} to="/">
                           Home
                        </Nav.Link>
                        <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                     </>
                  )}
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};