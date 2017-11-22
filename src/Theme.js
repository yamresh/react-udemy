import React from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Page from './Page';


class Theme extends React.Component {
  render() {
    return(
      <div>
        <Navbar brand="CodeSandbox" />
        <Jumbotron linkname="React" />
        <Page pname="amresh" />
      </div>
    )
  }
}

export default Theme