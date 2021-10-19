import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class listUsers extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.obtenerDatos();
    }

    obtenerDatos() {
        var users = window.localStorage.getItem('users');

        if (users === null) {
            users = [];
        } else {
            users = JSON.parse(users);
        }

        this.setState({ users: users });

    }
    deleteUser(userArg) {
        const { users } = this.state;

        let userIndex = localStorage.setItem('users',
            users.filter(userFind => userFind.id !== userArg.id));

        //userIndex.splice(userIndex,1);
        //let userArrayJson = JSON.stringify();
        //userIndex = JSON.stringify(userIndex);
        //userIndex = JSON.parse(userIndex);
        window.localStorage.setItem('users', userIndex);

        //this.setState({ users: localStorage.getItem('users') });


    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Email</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.length > 0 ?
                                    this.state.users.map((user,i) => {
                                        return <tr key={i}>
                                            <th> {i} </th>
                                            <th> {user.name} </th>
                                            <th> {user.mail} </th>
                                            <th>
                                                <Button href={`/detail/${user.id}`} variant="primary" style={{ marginRight: 15 }}>Ver</Button>
                                                <Button href={`/`} onClick={() => this.deleteUser(user)} variant="danger">Borrar</Button>
                                            </th>
                                        </tr>
                                    }
                                    )
                                    :
                                    <React.Fragment />
                            }
                        </tbody>
                    </Table>
                </Container>
            </React.Fragment>
        );
    }
}

export default listUsers;