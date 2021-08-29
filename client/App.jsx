import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage.jsx';
import NavBar from './shared/NavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="landing-page-main-div">
          <Router>
            <NavBar />

            <Route exact path="">
              <LandingPage />
            </Route>

            <Route path="/sign-in">
              {/* <SignIn /> */}
              <h2>Hello Sign in</h2>
            </Route>

            <Route path="/search">
              <h2>Hello Search</h2>
            </Route>

            <Route path="/cart">
              <h2>Hello Shopping Cart</h2>
            </Route>

            <Route path="/checkout">
              <h2>Hello Checkout</h2>
            </Route>
          </Router>
        </div>
      </>
    );
  }

}

{ /* <h1>Hello World</h1> */ }




ReactDOM.render(<App />, document.getElementById('app'));