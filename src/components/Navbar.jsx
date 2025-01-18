import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export function BasicExample() {

  const esconder = () => {
    const navegar = document.getElementById("navbar-collapse")
    navegar.classList.remove('show')

  }


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >


        <Link className='navbar-brand' to={'/'} onClick={esconder} href="#home">Cocin<span className='span1'>A</span><span className='span2'>R</span><span className='span3'>G</span></Link>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Link className='nav-link' href="#home" to={'/'} onClick={esconder}>Home</Link>

            <NavDropdown title="RECETAS" id="basic-nav-dropdown">


              < Link className='dropdown-item' to={'/recetas'} onClick={esconder} href="#action/3.1">
                Todas
              </Link>

              <Link className='dropdown-item' to={'/categoria/comidas'} onClick={esconder} href="#action/3.2">
                Comidas
              </Link>

              <Link className='dropdown-item' to={'/categoria/postres'} onClick={esconder} href="#action/3.3">
                Postres
              </Link>

            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

