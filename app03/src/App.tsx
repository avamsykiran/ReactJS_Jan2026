import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Header from "./components/Header";
import ShoppingCounter from "./components/ShoppingCounter";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Header appTitle="My First React App" />
      <Container fluid className="p-4">
        <Row>
          <Col className="p-4">
            <Welcome />
          </Col>
          <Col className="p-4">
            <Counter />
          </Col>
          <Col className="p-4">
            <ShoppingCounter />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;