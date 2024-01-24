import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CarWidget/CarWidget';
import { DiCodeigniter } from "react-icons/di";


function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><DiCodeigniter /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#ekyword">Teclados</Nav.Link>
            <Nav.Link href="#mouse">Mouse</Nav.Link>
            <Nav.Link href="#headset">Auriculares</Nav.Link>
            <Nav.Link href="#cart"><CarWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;