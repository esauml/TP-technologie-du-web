import React, { Component } from "react";

class Cadeau extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    
  }
  render() {
    return (
      <>
        <ul>
          {this.props.cad.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </>
    );
  }
}
export default Cadeau;
