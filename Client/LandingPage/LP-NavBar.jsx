import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

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
          <a>Sign in</a>
        </div>
        <div className="landing-page-cart-link-div">
          <ShoppingCartOutlinedIcon />
        </div>
      </nav>
    );
  }
}

export default NavBar;