import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function NavBar({ onLogout, isLoggedIn }) {
  return (
    <Navbar
      expand="md"
      bg="blue"
      variant="dark"
      className="bg-gray-800 text-white"
    >
      <Container className="mx-auto">
        <Navbar.Brand href="#">L-BAZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="text-blue-400">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/dashboard" className="text-blue-400">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/create" className="text-blue-400 mr-3">
              Create
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/developer"
              className="text-blue-400 mr-3"
            >
              Developer
            </Nav.Link>
          </Nav>
          {!isLoggedIn ? (
            <Button as={NavLink} to="/login" variant="outline-light">
              Login
            </Button>
          ) : (
            <Button onClick={onLogout} variant="outline-light">
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
