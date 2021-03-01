import React from 'react';
import { Navbar,Form, Button,FormControl,Nav } from 'react-bootstrap';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Khulna Titans</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Players</Nav.Link>
          <Nav.Link href="#pricing">Team</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
};

export default Header;