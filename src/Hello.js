import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>

      <p> Hello I am from React {this.props.name} </p>

      </div>
    )
  }
}

export default Hello