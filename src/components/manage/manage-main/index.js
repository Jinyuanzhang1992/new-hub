import { Outlet, Container, Row, Col } from "../../../utils/imports";
import SideBar from "./side-bar";

function ManageMain() {
  return (
    <Container fluid>
      <Row>
        <Col lg={9}>
          <Outlet />
        </Col>
        <Col lg={3}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
}

export default ManageMain;
