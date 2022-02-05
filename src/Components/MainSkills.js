import { Component } from "react";
import React from "react";

class MainSkills extends Component {
  componentDidUpdate() {
    console.log("-----component did updated-----");
  }
  componentDidMount() {
    console.log("-----component did mount-----");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount Message Component");
  }
  render() {
    console.log("-----in rendering-----");
    return (
      <section className="colorlib-services" data-section="services">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">
                <strong>What can I do for you?</strong>
              </span>
              <h1 className="colorlib-heading">Main Skills</h1>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="three columns text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <img
                    src="https://img.icons8.com/color/48/000000/javascript-logo-1.png"
                    height="40px"
                    width="40px"
                    alt="js"
                  />
                </span>
                <div className="desc">
                  <h5>JavaScript</h5>
                  {/* <p>3 Years</p> */}
                </div>
              </div>
            </div>
            <div className="three columns text-center animate-box">
              <div className="services color-2">
                <span className="icon">
                  <img
                    src="https://img.icons8.com/color/48/000000/react-native.png"
                    height="40px"
                    width="40px"
                    alt="React native"
                  />
                </span>
                <div className="desc">
                  <h5>React</h5>
                  <h5>(Redux, thunk, saga)</h5>
                  {/* <p>1 Year</p> */}
                </div>
              </div>
            </div>
            <div className="three columns text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <img
                    src="images/node.png"
                    height="45px"
                    width="45px"
                    alt="node"
                  />
                </span>
                <div className="desc">
                  <h5>NodeJS</h5>
                  <h5>(Express)</h5>
                  {/* <p>3 Years</p> */}
                </div>
              </div>
            </div>
            <div className="three columns text-center animate-box">
              <div className="services color-7">
                <span className="icon">
                  <img
                    src="https://api.iconify.design/logos-typescript-icon.svg?height=40"
                    height="40px"
                    width="40px"
                    alt="ts"
                  />
                </span>
                <div className="desc">
                  <h5>Typescript</h5>
                  <h5>&nbsp;</h5>
                  {/* <p>3 Years</p> */}
                </div>
              </div>
            </div>
            <div className="three columns text-center animate-box">
              <div className="services color-7">
                <span className="icon">
                  <img
                    src="images/angular-icon-1.svg"
                    height="40px"
                    width="40px"
                    alt="angular"
                  />
                </span>
                <div className="desc">
                  <h5>Angular</h5>
                </div>
              </div>
            </div>
            <div className="three columns text-center animate-box">
              <div className="services color-6">
                <span className="icon">
                  <img
                    src="images/mongodb.png"
                    height="40px"
                    width="40px"
                    alt="mongodb"
                  />
                </span>
                <div className="desc">
                  <h5>MongoDB</h5>
                </div>
              </div>
            </div>
            <div className="three columns text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <img
                    src="https://img.icons8.com/color/48/000000/python.png"
                    height="40px"
                    width="40px"
                    alt="python"
                  />
                </span>
                <div className="desc">
                  <h5>Python</h5>
                </div>
              </div>
            </div>
            <div className="three columns text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <img
                    src="images/flask-log.png"
                    height="40px"
                    width="40px"
                    alt="flask"
                  />
                </span>
                <div className="desc">
                  <h5>Flask</h5>
                  {/* <h5>(2.x, 3.x)</h5> */}
                  {/* <p>2 Years</p> */}
                </div>
              </div>
            </div>
            <div className="three columns text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <img
                    src="images/nextjs-logo.png"
                    height="40px"
                    width="40px"
                    alt="nextjs"
                  />
                </span>
                <div className="desc">
                  <h5>Nextjs</h5>
                  {/* <h5>(Vuetify, Nuxt)</h5> */}
                  {/* <p>3 Months</p> */}
                </div>
              </div>
            </div>
            <div className="three columns text-center animate-box">
              <div className="services color-8">
                <span className="icon">
                  <img
                    src="images/postgres-logo.jpeg"
                    height="50px"
                    width="50px"
                    alt="postgres"
                  />
                </span>
                <div className="desc">
                  <h5>postgreSQL</h5>
                  <h5>&nbsp;</h5>
                  {/* <p>2 Years</p> */}
                </div>
              </div>
            </div>
            <div className="three columns text-center animate-box">
              <div className="services color-2">
                <span className="icon">
                  <img
                    src="images/ionic-logo.png"
                    height="40px"
                    width="40px"
                    alt="Ionic"
                  />
                </span>
                <div className="desc">
                  <h5>Ionic</h5>
                  {/* <p>3 Years</p> */}
                </div>
              </div>
            </div>
            <div className="three columns text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <img
                    src="images/aws-logo.png"
                    height="40px"
                    width="40px"
                    alt="AWS"
                  />
                </span>
                <div className="desc">
                  <h5>AWS Cloud</h5>
                  {/* <h5>(5, 6, 7, 8)</h5> */}
                  {/* <p>1 Year</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainSkills;
