import React, { Component } from "react";
import Item from "./components/Item";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ComingS from "./components/ComingS";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  state = {
    cart: {}, // empty
    cartQty: 0,
    items: [
      {
        id: 1,
        name: "Jocker",
        lang: "English",
        age: "15+",
        type: "Crime | Thriller",
        hours: "2Hrs 5 mins",
        date: (
          <p>
            Sat 9/11 (10:30pm) <br />
            Sun 10/11 (11:30pm) <br /> Mon 11/11 (10:30pm) <br />
            Tues 12/11 (12:30pm) <br />
            Wed 13/11 (11:30pm)
            <br /> Thur 14/11 (10:30pm)
          </p>
        ),
        imgPath: "images/joker.jpeg",
        price: 45,
        description:
          "Joker centers around the iconic arch-nemesis and is an original, standalone story not seen before on the big screen. The exploration of Arthur Fleck (Joaquin Phoenix), a man disregarded by society, is not only a gritty character study, butalso a broader cautionarytale.",
        video: (
          <iframe
            width="800"
            height="315"
            src="https://www.youtube.com/embed/zAGVQLHvwOY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )
      },
      {
        id: 2,
        name: "War",
        lang: "English",
        age: "+15",
        type: "Action",
        hours: "2Hrs 30min",
        date: (
          <p>
            Sat 9/11 (10:30pm) <br />
            Sun 10/11 (11:30pm) <br /> Mon 11/11 (10:30pm) <br />
            Tues 12/11 (12:30pm) <br />
            Wed 13/11 (11:30pm)
            <br /> Thur 14/11 (10:30pm)
          </p>
        ),

        imgPath: "images/War.jpg",
        price: 45,
        description:
          "WAR pits two of the biggest action superstars of our generation, HrithikRoshan and Tiger Shroff,in a massive showdown against each other. The biggest action entertainerof the year will see both of these incredible actionstars push their bodies to the limit to pull off neverbefore seen, death defying action stunts thatwill keep you on the edge of your seats.",
        video: (
          <iframe
            width="800"
            height="315"
            src="https://www.youtube.com/embed/tQ0mzXRk-oM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )
      },
      {
        id: 3,
        name: "Abominable",
        lang: "English",
        age: "G",
        type: "Animation | Adventure | Comedy",
        hours: "1Hr 32mins",
        date: (
          <p>
            Sat 9/11 (10:30pm) <br />
            Sun 10/11 (11:30pm) <br /> Mon 11/11 (10:30pm) <br />
            Tues 12/11 (12:30pm) <br />
            Wed 13/11 (11:30pm)
            <br /> Thur 14/11 (10:30pm)
          </p>
        ),
        imgPath: "images/amb.jpeg",
        price: 45,
        description:
          "When teenage Yi (Chloe Bennet) encounters a young Yeti on the roof ofher apartment building inShanghai, she and her mischievous friends Jin (Tenzing Norgay Trainor)and Peng (Albert Tsai) name him “Everest” and embark on an epic quest to reunite the magical creature with his family at the highest point on Earth. But the trio of friends will have to stay one-step ahead of Burnish (Eddie Izzard), awealthy man intent on capturing a Yeti,zoologist Dr. Zara (SarahPaulson) to help Everest get home.",
        video: (
          <iframe
            width="800"
            height="315"
            src="https://www.youtube.com/embed/XrgVtuDRBjM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )
      },
      {
        id: 4,
        name: "Shaun The Sheep",
        lang: "English",
        age: "G",
        type: "Adventure | Comedy",
        hours: "1Hr 26mins",
        date: (
          <p>
            Sat 9/11 (10:30pm) <br />
            Sun 10/11 (11:30pm) <br /> Mon 11/11 (10:30pm) <br />
            Tues 12/11 (12:30pm) <br />
            Wed 13/11 (11:30pm)
            <br /> Thur 14/11 (10:30pm)
          </p>
        ),
        imgPath: "images/shaun.jpg",
        price: 45,
        description:
          "When an alien with amazing powers crash-lands near Mossy BottomFarm, Shaun the Sheep goes on a mission to shepherd the intergalacticvisitor home before a sinister organization can capture her",
        video: (
          <iframe
            width="800"
            height="315"
            src="https://www.youtube.com/embed/-DH8TShEgdA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )
      },
      {
        id: 5,
        name: "Ad Astra",
        lang: "English",
        age: "PG",
        type: "Sci-Fi | Thriller",
        hours: "2Hrs 3mins",
        date: (
          <p>
            Sat 9/11 (10:30pm) <br />
            Sun 10/11 (11:30pm) <br /> Mon 11/11 (10:30pm) <br />
            Tues 12/11 (12:30pm) <br />
            Wed 13/11 (11:30pm)
            <br /> Thur 14/11 (10:30pm)
          </p>
        ),
        imgPath: "images/Astra.jpg",
        price: 45,
        description:
          "An astronaut travels to the outer edges of the solar system to find his father and unravel a mystery that threatens the survival of our planet. He uncovers secrets which challenge the nature of human existence and our place in the cosmos.",
        video: (
          <iframe
            width="800"
            height="315"
            src="https://www.youtube.com/embed/SYLQdxec5lM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )
      }
    ],

    comingSoon: [
      {
        id: 1,
        name: "Maleficent: Mistress Of Evi",
        lang: "English",
        age: "PG",
        type: "Adventure | Family | Fantasy",
        hours: "2Hrs",
        imgPath: "images/Maleficent.png",
        price: 45,
        description:
          "In Disney’s “Maleficent: Mistress of Evil,” a sequel to the 2014 global box office hit,Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they arepulled in different directions by impending nuptials, unexpected allies and dark new forces at play.",
        video: (
          <iframe
            width="800"
            height="315"
            src="https://www.youtube.com/embed/n0OFH4xpPr4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )
      },
      {
        id: 2,
        name: "Terminator: Dark Fate",
        lang: "English",
        age: "TBC",
        type: "Action | Adventure",
        hours: "2Hrs 10mins",
        imgPath: "images/terminator.jpg",
        price: 45,
        description:
          "Sarah Connor has returned from far away, and she's gearing up with a team of agents who will fight against T-1000.https:",
        video: (
          <iframe
            width="800"
            height="315"
            src="https://www.youtube.com/embed/oxy8udgWRmo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )
      },
      {
        id: 3,
        name: "Salama’s Big Wish",
        lang: "English",
        age: "PG",
        type: "Animation| Adventure | Family",
        hours: "1Hr 28mins",
        imgPath: "images/sal.jpg",
        price: 45,
        description:
          "In the Mexican town of Santa Clara, lives Salma, a 16 year-old orphan who never got to meet her biological parents. The only story she's been toldher whole life is that they abandoned her. Salma has spent most of her life dedicated to searching out clues for her parents' identity and their whereabouts with little to no luck, until she discovers a special book that is filled with stories of Santa Clara and the history of their people. With this new special book, Salma sets off onto an adventure with her two brave and heart-warming foster brothers, Jorge and Pedro, to find the missing links to her family's heritage in hopes to finally get to meet her long lost parents",
        video: (
          <iframe
            width="800"
            height="315"
            src="https://www.youtube.com/embed/7TrCUY5OEnM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )
      },
      {
        id: 4,
        name: "Haunt ",
        lang: "English",
        age: "TBC",
        type: "Horror | Thriller",
        hours: "1Hr 32mins",
        imgPath: "images/haunt.jpg",
        price: 45,
        description:
          "On Halloween, six friends encounter an extreme hauntedhouse that promises to feed on their darkest fears. The night turns deadly as they discover that some monsters are real",
        video: (
          <iframe
            width="800"
            height="315"
            src="https://www.youtube.com/embed/bXRGvxdHvZA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )
      },
      {
        id: 5,
        name: "The Addamas Family ",
        lang: "English",
        age: "TBC",
        type: "Animation",
        hours: "1Hr 40mins",
        imgPath: "images/addams.jpg",
        price: 45,
        description:
          "From Metro Goldwyn Mayer (MGM) and Universal Pictures, the peculiar, ghoulish family will face off against a crafty reality TV host while also preparing for their extended family to arrivefor a major celebration.",
        video: (
          <iframe
            width="800"
            height="315"
            src="https://www.youtube.com/embed/F7Ug863S8dQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )
      }
    ]
  };

  // state change logic

  renderItems() {
    let { items, cart } = this.state;
    return items.map(item => {
      return (
        <div key={item.id} className="list-group-item">
          <Item item={item} />
        </div>
      );
    });
  }

  renderComingS() {
    let { comingSoon } = this.state;
    console.log(comingSoon);
    return comingSoon.map(coming => {
      return (
        <div key={coming.id} className="list-group-item">
          <ComingS coming={coming} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Navbar title="Joy Movies" />

        <Router>
          <div>
            <div className="container">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link style={{ color: "#fff" }} className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: "#fff" }}
                    className="nav-link"
                    to="/items"
                  >
                    Showing now{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: "#fff" }}
                    className="nav-link"
                    to="/ComingS"
                  >
                    Coming soon
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: "#fff" }}
                    className="nav-link"
                    to="/login"
                  >
                    login
                  </Link>
                </li>
              </ul>
            </div>
            <hr />
            <div className="container">
              <Switch>
                <Route exact={true} path={"/"} component={Dashboard} />
                <Route path={"/items"} render={() => this.renderItems()} />
                <Route path={"/ComingS"} render={() => this.renderComingS()} />
                <Route path={"/login"} component={Login} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
