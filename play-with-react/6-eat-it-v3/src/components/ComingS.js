import React, { Component } from "react";

class ComingS extends Component {
  state = {
    currentTab: 1
  };

  changeTab(tabIndex, e) {
    e.preventDefault();
    this.setState({ currentTab: tabIndex });
  }

  renderTabPanel(coming) {
    let { currentTab } = this.state;
    switch (currentTab) {
      case 1:
        return <div>{coming.description}</div>;
      case 2:
        return <div>{"chef on holiday.."}</div>;
      case 3:
        return <div>{coming.video}</div>;
      case 4:
        return <div>{"chef on holiday.."}</div>;
      default:
        return null;
    }
  }

  render() {
    let { coming } = this.props;
    let { currentTab } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-3 col-sm-3 col-md-3">
            <img className="img-fluid" alt={coming.lang} src={coming.imgPath} />
          </div>
          <div className="col-9 col-sm-9 col-md-9">
            <div>
              <h3>{coming.name}</h3> <br />
              <h6 style={{ color: "gray" }}>{coming.lang} </h6>
              <h6 style={{ color: "gray" }}>{coming.age} </h6>
              <h6 style={{ color: "gray" }}>{coming.type} </h6>
              <h6 style={{ color: "gray" }}>{coming.hours} </h6>
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
                    Tickect
                  </a>
                </li>
              </ul>
              {this.renderTabPanel(coming)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComingS;
