import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar  className='Navbar'>  
        <Container>
        <Link to={"/"}>GretiShop</Link>
          <Nav className="me-auto">
            <Link to={"/catalogue"}>Catalogue</Link>
          </Nav>
        </Container>
        <Link to={"/Cart"}><CartWidget/></Link>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;