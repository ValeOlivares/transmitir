import React, { Component } from 'react';
import ReactDom from 'react-dom';
import firebase, { auth, provider } from '../firebase.js';
import PropTypes from 'prop-types';
import Home from './Home.jsx';
// import { Grid, Row, Col } from 'react-bootstrap';

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
            <div className="show-grid">
              <div>
                <div className="login-container text-center">
                  <div className="show-grid">
                    <div>
                    </div>
                  </div>
                  <div className="show-grid">
                    <div >
                      <h1>Play trivia!</h1>
                    </div>
                  </div>
                  <div className="show-grid">
                    <div
                      xs={8}
                      xsOffset={2}
                      sm={8}
                      smOffset={2}
                      md={8}
                      mdOffset={2}
                      lg={8}
                      lgOffset={2}
                    >
                      <p className="text-justify">
                        Test your knowledge in any area of your choosing and
                        challenge yourself everyday!
                      </p>
                    </div>
                  </div>
                  <div className="show-grid">
                    <div xs={12} sm={12} md={12} lg={12}>
                      <button className="btn btn-warning" onClick={this.login}>
                        <i className="fab fa-google" />
                        <span>Log in with your Google account</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
