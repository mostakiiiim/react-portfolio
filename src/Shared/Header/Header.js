import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <>
                <Navbar className="p-3" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/home"><i className="fab fa-hire-a-helper pe-2"></i>IDYLLIC Hospital</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me-end">
                                <Nav.Link as={Link} to="/services">
                                    <i className="fas fa-medkit pe-1"></i>Services</Nav.Link>
                                <Nav.Link as={Link} to="/doctors"><i className="fas fa-user-md pe-1"></i>Doctors</Nav.Link>

                                <Nav.Link as={Link} to="/billing"><i className="fas fa-file-invoice-dollar pe-1"></i>Billing</Nav.Link>
                                <Nav.Link as={Link} to="/appointment">
                                    <i className="fas fa-calendar-check pe-1"></i>Appointment</Nav.Link>
                                <Navbar.Text>
                                    <i className="far fa-user pe-1"></i>User: <span className="text-white">{user?.displayName}</span>
                                </Navbar.Text>
                                {user.email ?
                                    <button className="btn btn-danger ms-1" onClick={logOut} > <i className="fas fa-sign-in-alt pe-2"></i>Logout</button> :
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