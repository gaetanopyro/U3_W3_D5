import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const song = useSelector((state) => state.selectedSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center text-center">
            <Col className="col-6 col-md-4 playerControls">
              {song ? (
                <>
                  <p className="text-white mb-1">
                    {song.title} - {song.artist.name}
                  </p>
                </>
              ) : (
                <p className="text-white mb-1">No song selected</p>
              )}

              <div className="d-flex justify-content-between">
                <a href="#">
                  <img src="src\assets\PlayerBtn\shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="src\assets\PlayerBtn\prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="src\assets\PlayerBtn\play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="src\assets\PlayerBtn\next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="src\assets\PlayerBtn\repeat.png" alt="repeat" />
                </a>
              </div>

              <div className="progress mt-3 w-100">
                <div
                  role="progressbar"
                  style={{
                    width: "40%",
                    backgroundColor: "#1DB954",
                    height: "3px",
                  }}
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
