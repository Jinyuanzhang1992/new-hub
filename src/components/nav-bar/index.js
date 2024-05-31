import { Nav, Container, Navbar } from "react-bootstrap";
import "./nav-bar.scss";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary" expand="lg" sticky="top">
      <Container className="d-flex justify-content-start align-items-center">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt="logo"
              src={`${process.env.PUBLIC_URL}assets//icons/icon-browser-tab.jpg`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            News Hub
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
            navbarScroll
          >
            <LinkContainer to="/post-list">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/write-list">
              <Nav.Link>Creation</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
