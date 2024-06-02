import { Outlet, Container, Row, Col } from "../../../utils/imports";
import SideBar from "./side-bar";

function ManageMain() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8} lg={9}>
          <Outlet />
        </Col>
        <Col xs={12} md={4} lg={3}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
}

export default ManageMain;
