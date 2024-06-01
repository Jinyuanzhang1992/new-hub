import {
  Container,
  Row,
  Col,
  ListGroup,
  LinkContainer,
} from "../../../utils/imports";
import { useState } from "react";

function SideBar() {
  const [activeKey, setActiveKey] = useState("/manage/dashboard");

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <Container fluid>
      {/* dashboard */}
      <Row className="mb-3">
        <Col lg={12}>
          <ListGroup as="ul">
            <LinkContainer
              to="/manage/dashboard"
              onClick={() => handleSelect("/manage/dashboard")}
            >
              <ListGroup.Item
                as="li"
                action
                active={activeKey === "/manage/dashboard"}
              >
                {/* action使得该项看起来像是可点击项目 */}
                Dashboard
              </ListGroup.Item>
            </LinkContainer>
          </ListGroup>
        </Col>
      </Row>
      {/* posts management */}
      <Row className="mb-3">
        <Col lg={12}>
          <ListGroup as="ul">
            <LinkContainer
              to="/manage/post-manage"
              onClick={() => handleSelect("/manage/post-manage")}
            >
              <ListGroup.Item
                as="li"
                action
                active={activeKey === "/manage/post-manage"}
              >
                Posts Management
              </ListGroup.Item>
            </LinkContainer>
            <LinkContainer to="/your-target-path">
              <ListGroup.Item as="li" action disabled>
                Comment Management
              </ListGroup.Item>
            </LinkContainer>
            <LinkContainer to="/your-target-path">
              <ListGroup.Item as="li" action disabled>
                Personal Settings
              </ListGroup.Item>
            </LinkContainer>
          </ListGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={12}>
          <ListGroup as="ul">
            <LinkContainer to="/your-target-path">
              <ListGroup.Item as="li" action disabled>
                User Management
              </ListGroup.Item>
            </LinkContainer>
            <LinkContainer to="/your-target-path">
              <ListGroup.Item as="li" action disabled>
                Role Management
              </ListGroup.Item>
            </LinkContainer>
            <LinkContainer to="/your-target-path">
              <ListGroup.Item as="li" action disabled>
                Backend API Permissions
              </ListGroup.Item>
            </LinkContainer>
            <LinkContainer to="/your-target-path">
              <ListGroup.Item as="li" action disabled>
                Frontend Page Permissions
              </ListGroup.Item>
            </LinkContainer>
            <LinkContainer to="/your-target-path">
              <ListGroup.Item as="li" action disabled>
                System Settings
              </ListGroup.Item>
            </LinkContainer>
          </ListGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={12}>
          <ListGroup as="ul">
            <LinkContainer to="/your-target-path">
              <ListGroup.Item as="li" action disabled>
                QQ Group - Please do not add more
              </ListGroup.Item>
            </LinkContainer>
            <LinkContainer to="/your-target-path">
              <ListGroup.Item as="li" action disabled>
                Script Writer
              </ListGroup.Item>
            </LinkContainer>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
// 注意，className="g-3"只适用于列与列之间的间距，而不适用于行与行之间的间距
// 为了使得行与行之间有间距，可以在Row组件上添加类名mb-3
export default SideBar;
