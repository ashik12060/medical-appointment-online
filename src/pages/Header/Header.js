import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {

    return (
        <>
            <Navbar className="border-bottom" bg="white" variant="white" sticky="top" collapseOnSelect expand="lg">
                <Container className="gap-5 ">
                    <Navbar.Brand as={Link} to="/home#home"><h1  className="header-1" style={{fontWeight:"bold"}}>Dentist</h1></Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-start text-dark gap-5 ">
                        <Nav.Link as={Link} to="/home#home" ><span className="size-style">Home</span> </Nav.Link>

                        <Nav.Link  as={Link} to="/home#about" ><span className="size-style">About</span></Nav.Link>

                        <Nav.Link as={Link} to="/home#cart" ><span className="size-style">Cart</span></Nav.Link>

                        <Nav.Link as={Link} to="/home#contact" ><span className="size-style">Contact</span></Nav.Link>
                        
                       
                        
                    </Navbar.Collapse>
                    
                    <Nav.Link as={Link} to="/home#contact" ><span className="button-style ">Appointment</span></Nav.Link>


                    <Nav.Link as={Link} to="/login" ><span className="button-style">Login</span></Nav.Link>

                    <Nav.Link as={Link} to="/login" ><span className="nav-button">Register</span></Nav.Link>
                        

                </Container>
            </Navbar>
        </>
    )
}
export default Header;