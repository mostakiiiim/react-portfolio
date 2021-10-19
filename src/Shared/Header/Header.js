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
                        <Navbar.Brand as={Link} to="/home">Navbar</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me-end">
                                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                                <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
                                {user.email ?
                                    <button className="btn btn-warning" onClick={logOut} > Logout</button> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                }
                                <Navbar.Text>
                                    Signed in as: {user?.displayName}
                                </Navbar.Text>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;