import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import useStore from './zustandStore';
import LandingPage from './LandingPage/LandingPage.jsx';
import NavBar from './shared/NavBar.jsx';
import ProductsContainer from './ProductsPage/ProductsContainer.jsx';
import SignIn from './shared/SignInModal.jsx';
import SignUp from './shared/SignUp.jsx';
import Overview from './ProductDetails/PD-Overview.jsx';
import exampleData from './ProductDetails/dummies';

const App = () => {
  // example of consuming state
  const myVariable = useStore((state) => state.exampleStateField);
  console.log(myVariable);
  const exampleChangeFn = useStore((state) => state.exampleChangeStateFn);

  return (
    <>
      <button onClick={exampleChangeFn}>change state</button>{' '}
      {/* example of changing state  */}
      <div className="landing-page-main-div">
        <Router>
          <NavBar />
          <Route exact path="/sign-in">
            <SignIn />
          </Route>

          <Route path="/sign-up">
            <SignUp />
          </Route>

          <Route exact path="/search">
            <h2>Hello Search</h2>
          </Route>

          <Route exact path="/cart">
            <h2>Hello Shopping Cart</h2>
          </Route>

          <Route exact path="/checkout">
            <h2>Hello Checkout</h2>
          </Route>

          <Route exact path="/">
            <LandingPage />
          </Route>
        </Router>
      </div>
      {/* added products container down here to test rendering */}
      {/* <ProductsContainer/> */}
      <div>
        <Overview product={exampleData.exampleData}/>
      </div>
    </>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
