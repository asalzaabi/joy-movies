import React, { Component } from "react";
import Seat from "./Seat";
export default class Ticket extends Component {
  state = {
    ticketCount: 0,
    selectMore: true,
    selectedCount: 0
  };
  incrementTicket() {
    this.setState({ ticketCount: ++this.state.ticketCount, selectMore: true });
  }
  decrementTicket() {
    this.setState({ ticketCount: --this.state.ticketCount });
  }
  shouldChangeSelectMore() {
    let { ticketCount, selectedCount, selectMore } = this.state;
    selectedCount++;
    if (ticketCount === selectedCount) {
      selectMore = false;
    }
    this.setState({ selectMore, selectedCount });
  }
  renderSeats() {
    let { selectMore, ticketCount } = this.state;
    return (
      <div className="row">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => {
          return (
            <Seat
              onSelect={e => this.shouldChangeSelectMore()}
              selectMore={ticketCount === 0 ? false : selectMore}
            />
          );
        })}
      </div>
    );
  }
  render() {
    let { ticketCount } = this.state;
    let { item } = this.props;
    return (
      <div className="container">
        <br />
        <h6>
          Number of tickets:{"  "}
          <span>
            <small
              className="badge badge-dark"
              onClick={e => this.decrementTicket()}
            >
              <i class="fa fa-minus"></i>
            </small>
            &nbsp;
            {ticketCount}
            &nbsp;
            <small
              className="badge badge-dark"
              onClick={e => this.incrementTicket()}
            >
              <i class="fa fa-plus"></i>
            </small>
          </span>
        </h6>
        <br />
        {this.renderSeats()}
        <br />
        <span>Total: AED {item * ticketCount}</span>
        &nbsp; &nbsp;
        <button className="btn btn-sm btn-warning">Checkout</button>
      </div>
    );
  }
}
