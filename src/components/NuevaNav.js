import { useAuth0 } from '@auth0/auth0-react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../img/logo.png';
import { LoginButton } from './LoginButton';
import { Logoutbutton } from './Logoutbutton';
import { Profile } from './Profile';
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';




function NuevaNav() {
  const {
    totalItems
  } = useCart();
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img
              src={logo}
              className="d-inline-block w-25 align-top"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link>
              <Link to="/" className='text-secondary' >
                Inicio
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products" className='text-secondary'>
                Productos
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">Accesorios</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Más"
            >
              <NavDropdown.Item>
                <Link to="/about" className='text-dark'>
                  Sobre Nosotros
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Domicilos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Calculadoras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Regalos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">Asociarse</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="me-2">
            <Form.Control
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
          </Form>
          {
            isAuthenticated ?
              <div className='me-auto navbar-nav'>
                <Profile />
                <Logoutbutton />
              </div>
              :
              <div>
                <LoginButton className="me-2" />
                <Link to="/LoginButton">
                  <Button className="me-2" variant="outline-secondary">Registrarse</Button>
                </Link>
              </div>
          }
          <Button className="me-2" variant="outline-secondary">
            <Link to="/cart" className='text-secondary'>
              <FaShoppingCart style={{ width: '20px' }} /> <Badge bg="secondary">({totalItems})</Badge>
            </Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NuevaNav;