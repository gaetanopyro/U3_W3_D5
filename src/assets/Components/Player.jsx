import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const song = useSelector((state) => state.selectedSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col className="col-lg-10 offset-lg-2">
          <Row className="flex-column justify-content-center align-items-center text-center">
            <Col className="col-6 col-md-4 playerControls">
              {song ? (
                <>
                  <img src={song.album.cover_small} alt="cover" />
                  <p>
                    {song.title} - {song.artist.name}
                  </p>
                </>
              ) : (
                <p>No song selected</p>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
