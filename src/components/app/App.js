import "./App.scss";
import NavBar from "../nav-bar/index";
import PostList from "../post-list";
import HotPost from "../hot-post";
import Footer from "../footer/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container fluid="lg" className="large-margin">
        <Row>
          <Col lg={9}>
            <PostList page={1} />
          </Col>
          <Col lg={3}>
            <HotPost page={1} />
          </Col>
        </Row>
      </Container>
      <Footer name={"Jinyuan Zhang"} />
    </div>
  );
}

export default App;
