import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Navbar() {
  return (
    <nav className="bg-primary px-5 pt-2" id="top">
      <Container>
        <Row>
          <Col xs={12} lg={9} className="text-center text-lg-start">
            <a href="/" className="navbar-brand">
              <img
                src="img/logo-merkallow-white.png"
                alt="Merkallow Logo"
                className="w-50 align-self-end"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;
