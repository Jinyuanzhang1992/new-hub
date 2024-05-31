import { Nav, Container, Navbar } from "react-bootstrap";
import "./nav-bar.scss";

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary" expand="lg" sticky="top">
      <Container className="d-flex justify-content-start align-items-center">
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={`${process.env.PUBLIC_URL}assets//icons/icon-browser-tab.jpg`}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          News Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
            navbarScroll
          >
            <Nav.Item>
              <Nav.Link
                href="https://www.sanfenginn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" eventKey="link-1">
                Creation
              </Nav.Link>
            </Nav.Item>
            {/* 这里可以添加更多的 Nav.Item */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
