import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      proMode: true,
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  toggle = () => {
    this.setState({ proMode: !this.state.proMode });
  };
  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  onLoadImage() {
    document.getElementsByTagName("header")[0].classList.add("onload");
    document.getElementsByClassName("App")[0].style.visibility = "visible";
  }
  componentDidMount() {
    this.getResumeData();
    document.getElementsByClassName("App")[0].style.visibility = "hidden";
  }

  render() {
    return (
      <div className="App">
        <img
          src="/images/background-web.jpg"
          alt="prehandImg"
          onLoad={this.onLoadImage}
          style={{ display: "none" }}
        />
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
