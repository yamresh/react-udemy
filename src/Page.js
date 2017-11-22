import React from 'react';

class Page extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
        <p>Hello {this.props.pname} </p>
          This is the home page
            </div>
      </div>
    )
  }
}

export default Page