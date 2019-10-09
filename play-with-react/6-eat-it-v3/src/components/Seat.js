import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default class Seat extends Component {
  state = {
    id: 1,
    available: true
  };
  changeStatus(e) {
    let { onSelect, selectMore } = this.props;
    if (!selectMore) {
      return;
    }
    // e.preventDefault?();
    this.setState({ available: !this.state.available }, () => {
      onSelect();
    });
  }
  choose() {}
  render() {
    let { available } = this.state;
    return (
      <div>
        <i
          style={available ? { color: "grey" } : { color: "red" }}
          className="fas fa-couch fa-lg"
          onClick={e => this.changeStatus()}
        ></i>
      </div>
    );
  }
}
