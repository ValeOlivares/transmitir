import React, { Component } from 'react';
import { Row, Col } from 'react-materialize'
import AppFooter from './AppFooter';
import Breathing1 from './Breathing1'
import Breathing2 from './Breathing2';
import Melody1 from './Melody1'
import Tone1 from './Tone1'


class Curricular extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className= "curricular">
                <div className="curricular-content">
                    <Row>
                        <Breathing1/>
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
                <AppFooter/> 
            </div>
            
        );
    }
}

export default Curricular;