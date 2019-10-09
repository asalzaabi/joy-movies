import React from "react";
function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <img src="images/logg.png" width="80" />
        <label style={{ color: "white", fontSize: "80px" }}>
          {props.title}
        </label>
        <a className="navbar-brand" href="/"></a>
      </nav>
    </div>
  );
}
export default Navbar;
