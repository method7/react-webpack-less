import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header role="banner">
        <div>Method7</div>
        <div>M7 React Header</div>
        <div>
          <a href="/logout">Logout</a>
        </div>
      </header>
    );
  }
}

export default Header;
