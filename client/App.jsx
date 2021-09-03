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
import Cart from '../client/CheckoutPage/cart/Cart.jsx';
import ServicesContainer from '../client/ServicesPage/ServicesContainer.jsx';
import ProdServCategories from './ProductServiceCategories/ProdServCategories.js';
import OrderConfirmationPage from './CheckoutPage/OrderConfirmation.jsx';

const App = () => {
  // example of consuming state
  const myVariable = useStore((state) => state.exampleStateField);
  console.log(myVariable);
  const exampleChangeFn = useStore((state) => state.exampleChangeStateFn);

  return (
    <div className="landing-page-main-div font">
      /* <Router>
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
              <Cart />
            </Route>

            <Route exact path="/product-details">
              <Overview />
            </Route>

            <Route exact path="/productInfo"
              render={(props) => (<Overview props={props} isAuthed={true} />)}>
            </Route>

            <Route exact path="/checkout">
              <h2>Hello Checkout</h2>
            </Route>

            <Route exact path="/categories">
              <h2>Hello categories</h2>
            </Route>

            <Route exact path="/products-page/:type">
              <ProductsContainer />
            </Route>

            <Route exact path="/confirmation">
              <OrderConfirmationPage />
            </Route>

            <Route exact path="/services">
              <ServicesContainer />
            </Route>

            <Route exact path="/">
              <LandingPage />
            </Route>

          </Grid>
        </Grid>
      </Router>
    </div>
  );
};

export default App;


// {/* added products container down here to test rendering */}
//   {/* <ProductsContainer/> */}
//   {/* <div>
//     <Overview product={exampleData.exampleData}/>
//             </div> */}


{/* <Router>
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

    </Grid>
  </Grid>
</Router> */}

{/* <Rou te exact path= "/cart">
              <Cart />
                </Route>

      <Route exact path="/product-details">
              <Overview />
            </Route>

            <Route exact path="/productInfo"
              render={(props) => (<Overview props={props} isAuthed={true} />)}>
            </Route>

            <Route exact path="/checkout">
              <h2>Hello Checkout</h2>
            </Route>

            <Route exact path="/categories">
              <h2>Hello categories</h2>
            </Route>

            <Route exact path="/products-page/:type">
              <ProductsContainer />
            </Route>

            <Route exact path="/confirmation">
              <OrderConfirmationPage />
            </Route>

            <Route exact path="/services">
              <ServicesContainer />
            </Route>

            <Route exact path="/">
              <LandingPage />
            </Route> */}
