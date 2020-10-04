import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import './Header.css';
import logo from '../../resources/Logo1.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const useNameStyle = {
        backgroundColor: '#F9A51A', 
        color: 'black', 
        borderRadius: '4px', 
        padding: '5px'
    }

    const handleLogout = () => {
        firebase.auth().signOut()
        .then(function() {
            // Sign-out successful.
            setLoggedInUser({});
          }).catch(function(error) {
            // An error happened.
          });
    }
    
    return (
    <React.Fragment >
      <Container fixed className="header">
      <Navbar expand="lg" className="font-weight-bold">
            <Navbar.Brand href="#home">
                <Link to="/home">
                    <img style={{filter:'invert(100%)'}}
                    width="120px"
                    height="56"
                    className="d-inline-block align-top text-light"
                    alt="React Bootstrap logo"
                    src={logo}/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-light">
                <Nav className="mr-auto w-75">
                <Nav.Link className="w-75">
                    <FormControl type="text" placeholder= "Search your Destination..." className="mr-lg-2 w-100" />
                </Nav.Link> 
                </Nav>
                <Nav className="ml-auto px-5 text-light">
                    <Nav.Link className="text-light"  href="#home">News</Nav.Link>
                    <Nav.Link className="text-light" href="#link">Destination</Nav.Link>
                    <Nav.Link className="text-light" href="#link">Blog</Nav.Link>
                    <Nav.Link className="text-light" href="#link">Contact</Nav.Link>
                    
                    
                    {
                        loggedInUser.email? 
                        <>
                            <h4 style={useNameStyle} className="navbar-text">
                                {loggedInUser.name ? loggedInUser.name.replace(/ .*/,'') : loggedInUser.name}<span>(<Link onClick={handleLogout}>Logout</Link>)</span>
                            </h4>
                        </>:
                        <Form >
                        <Link to="/login"><Button className="yellow-btn">Login</Button></Link>
                        </Form>
                    }
                    
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
      </Container>
    </React.Fragment>
        
            
        
    );
};

export default Header;