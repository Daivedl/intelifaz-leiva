import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';


class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/home">Candidate Exercise</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/add">Add User</Nav.Link>
                    </Nav>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavBar;