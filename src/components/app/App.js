import "./App.scss";
import NavBar from "../nav-bar/index";
import PostList from "../post-list";
import HotPost from "../hot-post";
import Footer from "../footer/index";
import WritePost from "../write-post";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" data-bs-theme="dark">
        {/* data-bs-theme="dark"：启用 dark 主题 */}
        <NavBar />
        <Container fluid="lg" className="large-margin">
          <Row>
            <Col lg={9}>
              <Routes>
                <Route path="/" element={<PostList page={1} />}></Route>
                <Route path="/post-list" element={<PostList />}></Route>
                <Route path="/write-list" element={<WritePost />}></Route>
              </Routes>
            </Col>
            <Col lg={3}>
              <HotPost />
            </Col>
          </Row>
        </Container>
        <Footer name={"Jinyuan Zhang"} />
      </div>
    </Router>
  );
}

export default App;
