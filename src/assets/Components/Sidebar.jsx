import { useState } from "react";
import { Navbar, Nav, Button, Form, InputGroup, Container } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { setMusic } from "../redux/action";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (!search.trim()) return;

    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`);
      if (res.ok) {
        const data = await res.json();
        dispatch(setMusic(data.data));
      }
    } catch (error) {
      console.error("Errore nella ricerca", error);
    }
  };

  return (
    <aside className="col col-2">
      <Navbar expand="md" fixed="left" className="flex-column" id="sidebar">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="#home">
            <img src="src/assets/logo.png" alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Nav className="flex-column">
            <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
            <Nav.Link href="#" className="d-flex align-items-center">
              <HouseDoorFill className="me-2" />
              Home
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center">
              <BookFill className="me-2" />
              Your Library
            </Nav.Link>
          </Nav>
          <InputGroup className="mt-3">
            <Form.Control placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search" />
            <Button variant="outline-secondary" size="sm" onClick={handleSearch}>
              GO
            </Button>
          </InputGroup>
        </Container>
        <div className="nav-btn d-flex flex-column align-items-start px-3 pb-3">
          <Button className="signup-btn">Sign Up</Button>
          <Button className="login-btn">Login</Button>
          <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
