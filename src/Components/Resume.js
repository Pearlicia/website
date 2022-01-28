import React, { Component } from "react";
import MainSkills from "./MainSkills";
import SubSkills from "./SubSkills";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>
              <span className="icon">
                <img
                  src="images/noun-logo.png"
                  height="40px"
                  width="40px"
                  alt="university"
                />
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {education.school}
            </h3>
            <p className="info">
              {education.degree}
              <br></br>
              <br></br>
              <em className="date">{education.entered} - </em>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var udacity = this.props.data.udacity.map(function (udacity) {
        return (
          <div key={udacity.school}>
            <h3>
              <span className="icon">
                <img
                  src="images/udacity-logo.jpg"
                  height="40px"
                  width="40px"
                  alt="udacity"
                />
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {udacity.school}
            </h3>
            <p className="info">
              {udacity.degree}
              <br></br>
              <br></br>
              <em className="date">{udacity.entered} - </em>
              <em className="date">{udacity.graduated}</em>
            </p>
            <p>{udacity.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company} className="workcompany">
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
            <p className="mainskills">{work["main skills"]}</p>
          </div>
        );
      });
      // var skills = this.props.data.skills.map(function (skills) {
      //   var className = "bar-expand " + skills.name.toLowerCase();
      //   return (
      //     <li key={skills.name}>
      //       <span style={{ width: skills.level }} className={className}></span>
      //       <em>{skills.name}</em>
      //     </li>
      //   );
      // });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span></span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{udacity}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <MainSkills />
          <SubSkills />
        </div>
      </section>
    );
  }
}

export default Resume;
