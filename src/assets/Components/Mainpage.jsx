import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { setMusic } from "../redux/action";
import Prefer from "./Prefer";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem");
        if (res.ok) {
          const data = await res.json();
          dispatch(setMusic(data.data));
        }
      } catch (error) {
        console.error("Errore nel fetch", error);
      }
    };

    fetchMusic();
  }, [dispatch]);

  return (
    <Container className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col className="mainLinks d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Prefer />
    </Container>
  );
};

export default MainPage;
