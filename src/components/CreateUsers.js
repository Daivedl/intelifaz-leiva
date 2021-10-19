import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class createUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            direccion: '',
            ciudad: '',
            email: '',
        }
    }
    componentDidMount() {
        this._isMounted = true;
    }

    myChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    enviarDatos = (e) => {
        e.preventDefault();
        const { nombre,apellido, direccion, ciudad, email } = this.state;

        var user = {
            id: new Date().getTime(),
            name: nombre,
            lastname: apellido,
            address: direccion,
            city: ciudad,
            mail: email
        };

        var users = window.localStorage.getItem('users');
        if(users === null) {
            users = [];
        } else {
            users = JSON.parse(users);
        }

        users.unshift(user);

        users = JSON.stringify(users);
        window.localStorage.setItem('users', users);

        alert('Usuario agregado');
        this.props.history.push('/');

    }

    render() {
        const { nombre, apellido, direccion, ciudad, email } = this.state;

        return (
            <React.Fragment>
                <Container>
                <Form className="col-6" onSubmit={this.enviarDatos}>
                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name="nombre" type="text" value={nombre}
                            onChange={this.myChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control name="apellido" type="text" value={apellido}
                            onChange={this.myChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control name="direccion" type="text" value={direccion}
                            onChange={this.myChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control name="ciudad" type="text" value={ciudad}
                            onChange={this.myChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" value={email}
                            onChange={this.myChangeHandler} />
                    </Form.Group>
                    <Button href="/" variant="primary"  style={{ marginRight: 25 }} className="mt-4">
                        Volver
                    </Button>
                    <Button type="submit" variant="success" className="mt-4">
                        Crear
                     </Button>
                </Form>
                </Container>
            </React.Fragment>
        );

    }
}

export default createUsers;