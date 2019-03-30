import React, { Component } from 'react';
import Curricular from './Curricular';

class Form extends Component {
    constructor(title) {
        super(title);
        this.state = {
            title,
            formCounter: 1
        }
        this.handleClick = this.handleClick.bind(this);
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

    render() {
        const { title } = this.props;
        const { formCounter } = this.state;
        console.log(formCounter === 1);

        return (
            <div>
                <p>
                    {title}

                </p>
                {formCounter === 1 ? (
                    <div>
                        <h3>Nombre</h3>
                        <button onClick={this.handleClick.bind(this)}>Next</button>
                    </div>
                ) : null}
                {formCounter === 2 ? (
                    <div>
                        <h3>Tono</h3>
                        <button onClick={this.handleClick.bind(this)}>Next</button>
                    </div>
                ) : null}
                {formCounter === 3 ? (
                    <div>
                        <h3>Registro</h3>
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
                        <h3>Malla</h3>
                        <Curricular/>
                        
                    </div>
                ) : null}
            </div>

        );
    }
}

export default Form;