import React, { Component } from 'react';
import tone from './../img/levels.png'

class Tone1 extends Component {
  render() {
    return (
      <div>
        <div className="curricular-square">
          <p>Nivel 1</p>
          <img src={tone} className="curricular-img"/>
          <p>Respiración</p>
        </div>
        
      </div>
    )
  }
}

export default Tone1; 