import React, { Component } from 'react';
import Curricular from './Curricular';
import { TextInput, Row, Col, Button } from 'react-materialize';
import AudioAnalyser from './AudioAnalyser';
import microphone from './../img/microphone.png'
import unicorn from './../img/unicorn1.png'

class Form extends Component {
    constructor(title) {
        super(title);
        this.state = {
            title,
            formCounter: 1,
            finish: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.toggleMicrophone = this.toggleMicrophone.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.nextQuestion();

    }

    nextQuestion() {
        const add = this.state.formCounter + 1;

        this.setState({
            formCounter: add,
            //   isValid: null
        });
    }

    async getMicrophone() {
        const audio = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false
        });
        this.setState({ audio });
    }

    stopMicrophone() {
        this.state.audio.getTracks().forEach(track => track.stop());
        this.setState({
            audio: null,
            finish: true
        });
    }

    toggleMicrophone() {
        if (this.state.audio) {
            this.stopMicrophone();
        } else {
            this.getMicrophone();
        }
    }

    render() {
        const { title } = this.props;
        const { formCounter } = this.state;
        const { finish } = this.state;

        return (
            <div>
                {formCounter === 1 ? (
                    <div>
                        <h3>¿Cómo te llamas?</h3>
                        <Row>
                            <Col s={12}>
                                <TextInput icon="person" label="Ingresa tu nombre" value={title} />
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                                <Button waves="light" className="fullbutton bold marginStartBtn" onClick={this.handleClick.bind(this)}>Continuar</Button>
                            </Col>
                        </Row>
                    </div>
                ) : null}
                {formCounter === 2 ? (
                    <div>
                        <h3>¿Qué tono quieres aprender?</h3>
                        <Row>
                            <Col s={12}>
                                <Button waves="light" className="fullbutton bold marginStartBtn" onClick={this.handleClick.bind(this)}>Agudo</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                                <Button waves="light" className="fullbutton bold marginStartBtn" onClick={this.handleClick.bind(this)}>Grave</Button>
                            </Col>
                        </Row>
                    </div>
                ) : null}
                {formCounter === 3 ? (
                    <div>
                        <Row>
                            <Col s={12}>
                                <p>Para tener un registro de tu voz, cuéntame dónde vives tú y dónde vive la persona que te gusta admiras o te atrae</p>
                            </Col>

                        </Row>
                        <div className="controls">
                            <Row>
                                <Col s={12}>
                                    <img src={microphone} className="curricular-img" onClick={this.toggleMicrophone} />
                                </Col>
                            </Row>
                        </div>
                        {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}

                        {finish === true ? (
                            <Row>
                                <Col s={12}>
                                    <Button waves="light" className="fullbutton bold marginStartBtn" onClick={this.handleClick.bind(this)}>Continuar</Button>
                                </Col>
                            </Row>
                        ) : null}



                    </div>
                ) : null}
                {formCounter === 4 ? (
                    <Row className="container">
                        <Col s={12} className="containerSpace">
                            <Row className="marginStartBtn"> 
                                <h5>Gracias! Con este registro podrás comparar tu actual tono con tu progreso vocal a medida que vayas practicando</h5>
                                <img src={unicorn} className="startImg" />

                            </Row>

                            <Row>
                                <Col s={12}>
                                    <Button waves="light" className="fullbutton bold marginStartBtn" onClick={this.handleClick.bind(this)}>Continuar</Button>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                ) : null}
                {formCounter === 5 ? (
                    <div>
                        <p>Elige tu meta:</p>
                        <Row>
                            <Col s={12}>
                                <Button waves="light" className="fullbutton bold marginStartBtn" onClick={this.handleClick.bind(this)}>Tranqui (5 minutos al día)</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                                <Button waves="light" className="fullbutton bold marginStartBtn" onClick={this.handleClick.bind(this)}>Tranqui (10 minutos al día)</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                                <Button waves="light" className="fullbutton bold marginStartBtn" onClick={this.handleClick.bind(this)}>Tranqui (15 minutos al día)</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={6}>
                            <img src={unicorn} className="unicorn-meta" />
                            </Col>
                            <Col s={6}>
                            <p>puedes modificar tu meta mas adelante</p>
                            </Col>
                        </Row>
                    </div>
                ) : null}
                {formCounter === 6 ? (
                    <div>
                        <Curricular />

                    </div>
                ) : null}
            </div>

        );
    }
}

export default Form;