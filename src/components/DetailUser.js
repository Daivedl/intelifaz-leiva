import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class detailUser extends Component {
    constructor() {
        super();
        this.state = {
            user: []
        }
    }
    componentDidMount() {
        this._isMounted = true;
        this.getUser();
    }
    getUser() {
        //const parametroId = this.props.match.params.id;

        var users = window.localStorage.getItem('users');

        if (users === null) {
            users = [];
        } else {
            users = JSON.parse(users);
        }

        this.setState({ user: users });
    }

    render() {
        let userOb = [];
        this.state.user.map((userE, i) => {
            if (userE.id == this.props.match.params.id) {
                userOb = userE;
            }

        });
        console.log(userOb);
        return (
            <React.Fragment>
                <Container>
                    <h5>User info</h5>
                    <ul>
                        <li> {userOb.id} </li>    
                        <li> {userOb.name} </li>
                        <li> {userOb.lastname} </li> 
                        <li> {userOb.city} </li>
                        <li> {userOb.address} </li>
                        <li> {userOb.mail} </li>
                    </ul>
                    <Button href={`/`} variant="primary">Volver</Button>
                </Container>
            </React.Fragment>
        );
    }
}

export default detailUser;