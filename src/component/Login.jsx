import React, { Component } from 'react';
import ReactDom from 'react-dom';
import firebase, { auth, provider } from '../firebase.js';
import PropTypes from 'prop-types';
import Home from './Home.jsx';
import { Row, Col, Button, TextInput } from 'react-materialize';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: null // se inicializa el state del usuario en null
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    // para que la sesión del usuario no se cierre al refrescar la página
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({ user });
            }
        });
    }

    logout() {
        auth.signOut().then(() => {
            this.setState({
                user: null
            });
        });
    }

    login() {
        auth.signInWithPopup(provider).then(result => {
            const user = result.user;
            this.setState({
                user
            });
        });
    }

    render() {
        return (
            <div className="app">
                {this.state.user ? (
                    <Home
                        title={this.state.user.displayName}
                        onClick={this.logout}
                    />
                ) : (
                        <div>
                            <Row className="containers">
                                <Col>
                                    <Row >
                                        <h5>Puedes escoger una cuenta o ingresar una nueva:</h5>
                                    </Row>
                                    <Row>
                                        <Col s={12}>
                                        <TextInput icon="email" label="Email" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col s={12}>
                                            <Button waves="light" className="fullbutton bold marginStartBtn" onClick={this.login}>
                                                <i className="fab fa-google" />Log in with your Google account</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    )}
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;
