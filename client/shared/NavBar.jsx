import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="landing-page-nav-bar">
        <div className="landing-page-logo">

        </div>
        <div className="landing-page-search-bar-div">
          <input className="landing-page-search-bar-textbox" type="text" src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png" placeholder="Search"></input>
        </div>
        <div className="landing-page-location-input-div">
          <input className="landing-page-location-input-textbox" type="text" placeholder="New York City"></input>
        </div>
        <div className="landing-page-login-link-div">
          <Link to="/sign-in">Sign in</Link>
        </div>
        <div className="landing-page-cart-link-div">
          <Link to="/cart"><ShoppingCartOutlinedIcon /></Link>

        </div>
      </nav>
    );
  }
}

export default NavBar;