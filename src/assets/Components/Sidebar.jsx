import { useState } from "react";
import { Navbar, Nav, Button, Form, InputGroup, Container, Collapse } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { setMusic } from "../redux/action";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(true);
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
      <Navbar expand="md" fixed="left" className="flex-column navbar fixed-left" id="sidebar">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="#home">
            <img src="src/assets/logo.png" alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarNavAltMarkup" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation" />

          <Collapse in={open}>
            <div id="navbarNavAltMarkup" className="w-100">
              <Nav className="flex-column">
                <ul>
                  <li>
                    <Nav.Link href="#" className="d-flex align-items-center">
                      <HouseDoorFill className="me-2 text-white" />
                      <h5 className="m-2 text-white">Home</h5>
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="#" className="d-flex align-items-center">
                      <BookFill className="me-2 text-white" />
                      <h5 className="m-2 text-white">Your Library</h5>
                    </Nav.Link>
                  </li>
                  <li>
                    <InputGroup className="mt-3">
                      <Form.Control type="text" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                      <Button variant="outline-secondary" size="sm" onClick={handleSearch}>
                        GO
                      </Button>
                    </InputGroup>
                  </li>
                </ul>
              </Nav>
            </div>
          </Collapse>
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
