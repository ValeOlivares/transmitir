import React, { Component } from 'react';
import Curricular from './Curricular';
import { TextInput } from 'react-materialize';
import AudioAnalyser from './AudioAnalyser';

class Form extends Component {
    constructor(title) {
        super(title);
        this.state = {
            title,
            formCounter: 1
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
        this.setState({ audio: null });
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
        console.log(formCounter === 1);

        return (
            <div>
                {formCounter === 1 ? (
                    <div>
                        <h3>Nombre</h3>
                        <TextInput value={title} />

                        <button onClick={this.handleClick.bind(this)}>Next</button>
                    </div>
                ) : null}
                {formCounter === 2 ? (
                    <div>
                        <h3>Tono</h3>

                        <button onClick={this.handleClick.bind(this)}>Agudo</button>
                        <button onClick={this.handleClick.bind(this)}>Grave</button>
                    </div>
                ) : null}
                {formCounter === 3 ? (
                    <div>
                        <h3>Registro</h3>
                        <div className="controls">
                            <button onClick={this.toggleMicrophone}>
                                {this.state.audio ? 'Stop microphone' : 'Get microphone input'}
                            </button>
                        </div>
                        {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}






                        <button onClick={this.handleClick.bind(this)}>Next</button>
                    </div>
                ) : null}
                {formCounter === 4 ? (
                    <div>
                        <h3>Compromiso</h3>
                        <button onClick={this.handleClick.bind(this)}>Next</button>
                    </div>
                ) : null}
                {formCounter === 5 ? (
                    <div>
                        <Curricular />

                    </div>
                ) : null}
            </div>

        );
    }
}

export default Form;