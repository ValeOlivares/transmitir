import React, { Component } from 'react';
import Form from './Form';

class Home extends Component {
  constructor(src, title, onClick) {
    super(src, title, onClick);
    this.state = {
    //   src,
      title,
      onClick,
      counter: 0,
      right: 0,
      selected: null
    };
  }
  render() {
    // const { src } = this.props;
    const { title } = this.props;
    const { onClick } = this.props;
    const { counter } = this.state;
    const { right } = this.state;
    const { select } = this.state;
    return (
      <div>
          {/* <h2>{title}</h2> */}
          <button onClick={onClick}>Cerrar Sesión</button>
        {/* <NavBar
        //   src={src}
          title={title}
          onClick={onClick}
          counter={counter}
          select={select}
        /> */}
        <Form title={title}/>
      </div>
    );
  }
}

export default Home;
