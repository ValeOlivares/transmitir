import React, { Component } from 'react';
import nose from './../img/nose.png';
import { Row, Col, Button } from 'react-materialize';
import Timer from 'react-compound-timer';


class Breathing1Logic extends Component {
    constructor(selected) {
        super(selected);
        this.state = {
            selected,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.selected(false);
        this.setState({
            selected: false
        });
    }

    render() {
        const { selected } = this.state;
        return (
            <Row className="containerSpace">
                <Col s={12}>
                    <Row>
                        <h5>Nivel 1: Respiración</h5>
                        <p>Pon Atención y respira en conjunto a la animación</p>

                    </Row>
                    <Row>
                        <div id="breathing-button" className="marginbreathing"></div>

                    </Row>
                    <Timer>
                        <Timer.Seconds /> Segundos
                </Timer>

                    <Button waves="light" className="fullbutton bold marginStartBtn" onClick={this.handleClick.bind(this)}>Atras</Button>
                </Col>

            </Row>
        )
    }
}

export default Breathing1Logic; 