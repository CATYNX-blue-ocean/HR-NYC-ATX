import React from 'react';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="logo">
          logo
        </div>
        <div className="search-bar">
          <input type="text"></input>
        </div>
        <div className="location-input">
          <input type="text"></input>
        </div>
        <div className="login-link"></div>
        <div className="cart-link"></div>
      </nav>
    );
  }
}

export default NavBar;