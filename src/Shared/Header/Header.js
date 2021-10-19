import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">IDYLLIC Hospital</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me-end">
                                <Nav.Link as={Link} to="/services">Departments</Nav.Link>
                                <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                                <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
                                <Navbar.Text>
                                    User Name: <span className="text-white">{user?.displayName}</span>
                                </Navbar.Text>
                                {user.email ?
                                    <button className="btn btn-danger ms-1" onClick={logOut} > Logout</button> :
                                    <Nav.Link as={Link} to="/login">Login/Sign Up</Nav.Link>
                                }
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;