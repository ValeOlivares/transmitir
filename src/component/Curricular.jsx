import React, { Component } from 'react';
import { Row, Col } from 'react-materialize'
import AppFooter from './AppFooter';
import Breathing1 from './Breathing1'
import Breathing2 from './Breathing2';
import Breathing1Logic from './Breathing1Logic';
import Melody1 from './Melody1'
import Tone1 from './Tone1'


class Curricular extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selected: false,
            Breathing1: false,

        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(event) {
        event.preventDefault();
        this.setState({
            selected: true,
          //   isValid: null
      });
    }

    render() { 
        const { selected } = this.state;
        console.log(selected);
        
        return ( 
            <div className= "curricular">
            { selected === true ? (
                <Breathing1Logic selected={bool => this.setState({ selected: bool })}/>

            ): (

                <div className="curricular-content">
    
                    <Row>
                        <a onClick={this.handleClick.bind(this)}>
                        <Breathing1/>
                        </a>
                    </Row>
                    <Row>
                        <Col s={6}>
                            <Melody1/>
                        </Col>
                        <Col s={6}>
                            <Tone1/>
                        </Col>
                    </Row>
                </div>  
            )
            
        }
        <AppFooter/> 

            </div>
            
        );
    }
}

export default Curricular;