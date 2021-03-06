import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">ReactStrap</a>
          </div>
          <div id="navbar">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">{this.props.brand}</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


export default Navbar

