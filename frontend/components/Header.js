import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Logo from './Logo'; 

const Header = () => {
  const router = useRouter();

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Logo/>
        <Navbar.Brand href="/" style={{ fontWeight: 'bold', color: '#6b46c1' }}>
          GetThumb
        </Navbar.Brand>

        {/* Toggle for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" >
          <Nav className="ms-auto" >
            {/* Navigation Links */}
            <Nav.Link
              href="/"
              active={router.pathname === '/'}
              style={{
                textDecoration: router.pathname === '/' ? 'underline' : 'none',
                fontWeight: router.pathname === '/' ? 'bold' : 'normal',
                color: '#6b46c1',
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/ideas"
              active={router.pathname === '/ideas'}
              style={{
                textDecoration: router.pathname === '/ideas' ? 'underline' : 'none',
                fontWeight: router.pathname === '/ideas' ? 'bold' : 'normal',
                color: '#6b46c1',
              }}
            >
              Ideas
            </Nav.Link>
            <Nav.Link
              href="/about"
              active={router.pathname === '/about'}
              style={{
                textDecoration: router.pathname === '/about' ? 'underline' : 'none',
                fontWeight: router.pathname === '/about' ? 'bold' : 'normal',
                color: '#6b46c1',
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/contact"
              active={router.pathname === '/contact'}
              style={{
                textDecoration: router.pathname === '/contact' ? 'underline' : 'none',
                fontWeight: router.pathname === '/contact' ? 'bold' : 'normal',
                color: '#6b46c1',
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
