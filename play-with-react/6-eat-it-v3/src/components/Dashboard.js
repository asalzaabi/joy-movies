import React from "react";

import "./Dashboard.css";

class Dashboard extends React.Component {
  slideIndex = 1;
  componentDidMount() {
    this.showSlides(this.slideIndex);
  }
  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }
  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
  render() {
    return (
      <div>
        <div class="slideshow-container">
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="images/joker.jpeg" style={{ width: "100%" }} />>
            <div class="text">Caption Text</div>
          </div>
          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="images/sal.jpg" style={{ width: "100%" }} />
            <div class="text">Caption Two</div>
          </div>
          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="images/War.jpg" style={{ width: "100%" }} />>
            <div class="text">Caption Three</div>
          </div>
        </div>
        <br />
        <div style={{ "text-align": "center" }}>
          <span class="dot" onClick={e => this.currentSlide(1)}></span>
          <span class="dot" onClick={e => this.currentSlide(2)}></span>
          <span class="dot" onClick={e => this.currentSlide(3)}></span>
        </div>
      </div>
    );
  }
}

export default Dashboard;
