import React from 'react';
import { render } from 'react-dom';
//import Navbar from './Navbar';
//import Jumbotron from './Jumbotron';
//import Page from './Page';
import Hello from './Hello';
import Theme from '/Theme';
import Counter from './Counter';
import './bootstraps.css'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
   <Theme />
   <Hello name="amresh" />
   <Counter />
  </div>
);

render(<App />, document.getElementById('root'));
