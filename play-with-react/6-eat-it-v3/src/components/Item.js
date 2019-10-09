import React, { Component } from "react";
import Ticket from "./Ticket";
class Item extends Component {
  state = {
    currentTab: 1
  };

  changeTab(tabIndex, e) {
    e.preventDefault();
    this.setState({ currentTab: tabIndex });
  }

  renderTabPanel(item) {
    let { currentTab } = this.state;
    switch (currentTab) {
      case 1:
        return <div>{item.description}</div>;
      case 2:
        return <div>{item.date}</div>;
      case 3:
        return <div>{item.video}</div>;
      case 4:
        return <div> {<Ticket item={item.price} />}</div>;
      default:
        return null;
    }
  }

  render() {
    let { item } = this.props;
    let { currentTab } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-3 col-sm-3 col-md-3">
            <img className="img-fluid" alt={item.name} src={item.imgPath} />
          </div>
          <div className="col-9 col-sm-9 col-md-9">
            <div>
              <h3>{item.name}</h3> <br />
              <h6 style={{ color: "gray" }}>{item.lang} </h6>
              <h6 style={{ color: "gray" }}>{item.age} </h6>
              <h6 style={{ color: "gray" }}>{item.type} </h6>
              <h6 style={{ color: "gray" }}>{item.hours} </h6>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    onClick={e => this.changeTab(1, e)}
                    className={
                      currentTab === 1 ? "nav-link active" : "nav-link"
                    }
                    href="/"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={e => this.changeTab(2, e)}
                    className={
                      currentTab === 2 ? "nav-link active" : "nav-link"
                    }
                    href="/"
                  >
                    Date & Time
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={e => this.changeTab(3, e)}
                    className={
                      currentTab === 3 ? "nav-link active" : "nav-link"
                    }
                    href="/"
                  >
                    Video
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    onClick={e => this.changeTab(4, e)}
                    className={
                      currentTab === 4 ? "nav-link active" : "nav-link"
                    }
                    href="/"
                  >
                    Ticket
                  </a>
                </li>
              </ul>
              {this.renderTabPanel(item)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
