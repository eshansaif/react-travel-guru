import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import './Header.css';
import logo from '../../resources/Logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <React.Fragment >
      <Container fixed className="header">
      <Navbar expand="lg" className="font-weight-bold">
            <Navbar.Brand href="#home">
                <Link to="/home">
                    <img
                    width="120px"
                    height="56"
                    className="d-inline-block align-top text-light"
                    alt="React Bootstrap logo"
                    src={logo}/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto w-100">
                <Nav.Link className="w-100">
                    <FormControl type="text" placeholder= "Search your Destination..." className="mr-lg-2 w-100" />
                </Nav.Link> 
                </Nav>
                <Nav className="ml-auto px-5 text-light">
                    <Nav.Link className="text-light"  href="#home">News</Nav.Link>
                    <Nav.Link className="text-light" href="#link">Destination</Nav.Link>
                    <Nav.Link className="text-light" href="#link">Blog</Nav.Link>
                    <Nav.Link className="text-light" href="#link">Contact</Nav.Link>
                    <Form >
                    <Button className="yellow-btn">Login</Button>
                    </Form>
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
      </Container>
    </React.Fragment>
        
            
        
    );
};

export default Header;