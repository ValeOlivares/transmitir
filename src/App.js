import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './component/Login';
import './App.css';
import { Row, Col, Button } from 'react-materialize';
import logostart from '../src/img/unicorn1.png';


class App extends Component {
  constructor() {
    super();
    this.state = {
      start: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      start: true,
      //   isValid: null
    });


  }

  render() {
    const { start } = this.state;
    console.log(start);


    return (
      <div className="App">
        {start === true ? (
          <Login />


        ) : (
            <Row className="container">
              <Col s={12} className="containerSpace">
                <Row>
                  <img alt="logostart" src={logostart} className="startImg" />
                </Row>
                <Row>
                  <Col s={12}>
                    <h2 className="bold">
                      Bienvenide
              </h2>
                    <p className="marginStart">
                      Aprende a vocalizar de manera gratis y entretenida
              </p>
                    <Button waves="light" className="fullbutton bold marginStartBtn" onClick={this.handleClick.bind(this)}>Empezar</Button>
                  </Col>
                </Row>

              </Col>
            </Row>



          )}


      </div>
    );
  }
}

export default App;
