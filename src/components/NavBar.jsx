import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar>  
        <Container>
          <Navbar.Brand href="#home">GretiShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Alimentos</Nav.Link>
            <Nav.Link href="#features">Accesorios</Nav.Link>
            <Nav.Link href="#pricing">Higiene</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;