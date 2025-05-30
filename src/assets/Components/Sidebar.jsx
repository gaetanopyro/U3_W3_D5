import { Navbar, Nav, Button, Form, InputGroup, Container } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <aside className="col col-2">
      <Navbar className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <Container className="container flex-column align-items-start">
          <Navbar.Brand href="#home">
            <img src="src\assets\logo.png" alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="flex-column">
              <ul>
                <li>
                  <Nav.Link href="#" className="d-flex align-items-center">
                    <HouseDoorFill className="me-2" />
                    Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#" className="d-flex align-items-center">
                    <BookFill className="me-2" />
                    Your Library
                  </Nav.Link>
                </li>
                <li>
                  <InputGroup className="mt-3">
                    <Form.Control placeholder="Search" aria-label="Search" />
                    <Button variant="outline-secondary" size="sm">
                      GO
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn d-flex flex-column align-items-start px-3 pb-3">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
