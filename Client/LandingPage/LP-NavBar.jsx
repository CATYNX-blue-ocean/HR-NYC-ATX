import React from 'react';


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
        <div className="landing-page-search-bar">
          <input type="text"></input>
        </div>
        <div className="landing-page-location-input">
          <input type="text"></input>
        </div>
        <div className="landing-page-login-link"></div>
        <div className="landing-page-cart-link"></div>
      </nav>
    );
  }
}

export default NavBar;