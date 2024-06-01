import "./App.scss";
import NavBar from "../nav-bar/index";
import PostList from "../post-list";
import HotPost from "../hot-post";
import Footer from "../footer/index";
import WritePost from "../write-post";
import PostDetails from "../post-details";
import ManageMain from "../manage/manage-main";
import Dashboard from "../manage/dashboard/index";
import PostManage from "../manage/post-manage";
// import { Container, Row, Col } from "react-bootstrap";
import {} from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Route,
  Routes,
  useLocation,
  Router,
  Navigate,
} from "../../utils/imports";

function AppContent() {
  const location = useLocation();
  const hideHotPost = /^\/(manage|write-list|post-details)/.test(
    location.pathname
  );
  // 在路径以 /manage 或 /write-list 开头时会返回 true，从而在这些路径及其子路径下隐藏 HotPost 组件。

  return (
    <div className="App" data-bs-theme="light">
      {/* data-bs-theme="dark"：启用 dark 主题 */}
      <NavBar />
      <Container fluid="lg" className="large-margin">
        <Row>
          <Col lg={hideHotPost ? 12 : 9}>
            {/* 隐藏右侧热门文章并不占据位置 */}
            <Routes>
              <Route path="/" element={<PostList page={1} />}></Route>
              <Route path="/post-list" element={<PostList />}></Route>
              <Route path="/post-details/:id" element={<PostDetails />}></Route>
              <Route path="/write-list" element={<WritePost />}></Route>
              <Route path="/manage" element={<ManageMain />}>
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="post-manage" element={<PostManage />}></Route>
                <Route path="dashboard" element={<Dashboard />}></Route>
              </Route>
            </Routes>
          </Col>
          {!hideHotPost && (
            <Col lg={3}>
              <HotPost />
            </Col>
          )}
        </Row>
      </Container>
      <Footer name={"Jinyuan Zhang"} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
