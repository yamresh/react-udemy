import React from 'react'

class Jumbotron extends React.Component {
  render() {
    return(
      <div> Simple and {this.props.linkname}</div>
    )
  }
}

export default Jumbotron