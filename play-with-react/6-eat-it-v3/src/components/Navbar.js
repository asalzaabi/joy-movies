import React from "react";
function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <img src="images/logo.gif" />
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
      </nav>
    </div>
  );
}
export default Navbar;
