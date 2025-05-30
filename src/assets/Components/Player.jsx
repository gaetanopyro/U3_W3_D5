import { Col, Container, ProgressBar, Row } from "react-bootstrap";

const Player = () => {
  return (
    <>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Row className="h-100">
          <Col className="col-lg-10 offset-lg-2">
            <Row className="h-100 flex-column justify-content-center align-items-center">
              <Col className="col-6 col-md-4 playerControls">
                <div className="d-flex">
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
                <div className="progress mt-3">
                  <ProgressBar role="progressbar"></ProgressBar>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Player;
