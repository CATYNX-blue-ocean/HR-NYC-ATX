import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LandingPage from './LandingPage/LandingPage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LandingPage />
    );
  }

}

{ /* <h1>Hello World</h1> */ }




ReactDOM.render(<App />, document.getElementById('app'));