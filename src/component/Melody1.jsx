import React, { Component } from 'react';
import note from './../img/musical-note.png'

class Melody1 extends Component {
  render() {
    return (
      <div>
        <div className="curricular-square">
          <p>Nivel 1</p>
          <img src={note} className="curricular-img"/>
          <p>Melodia</p>
        </div>
        
      </div>
    )
  }
}

export default Melody1; 