
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const header = () => {
  return (<header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cart">
              <FaShoppingCart /> Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <FaUser /> Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </header>)
}

export default header;
