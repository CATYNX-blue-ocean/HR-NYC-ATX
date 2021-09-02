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
import { Grid } from '@material-ui/core';

import Checkout from './CheckoutPage/CheckoutPage.jsx';

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
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item width="1">
              <NavBar />
            </Grid>
            <Grid item width="1">
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
<<<<<<< HEAD
                <h2>Hello Shopping Cart</h2>
              </Route>

              <Route exact path="/checkout">
                <h2>Hello Checkout</h2>
=======
                <Cart />
              </Route>

              <Route exact path="/product-details">
                <Overview product={exampleData.exampleData} />
              </Route>

              <Route exact path="/checkout">
                <CheckoutPage />
              </Route>

              <Route exact path="/categories">
                <ProdServCategories />
              </Route>

              <Route exact path="/products">
                <ProductsContainer />
              </Route>

              <Route exact path="/confirmation">
                <OrderConfirmationPage/>
              </Route>

              <Route exact path="/services">
                <ServicesContainer />
>>>>>>> 6944ac4713257c433f07e6564000091f494e545a
              </Route>

              <Route exact path="/">
                <LandingPage />
              </Route>
            </Grid>
          </Grid>
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
//ReactDOM.render(<App />, document.getElementById('app'));
