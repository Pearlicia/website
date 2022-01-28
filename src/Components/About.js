import React, { Component } from "react";
import ModalImage from "react-modal-image";

class About extends Component {
  state = {
    showImage: false,
  };

  showProfileImage = () => {
    debugger;
    this.setState({
      showImage: !this.state.showImage,
    });
  };
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <ModalImage
              className="profile-pic"
              small={profilepic}
              large={profilepic}
              alt="Pearlicia"
            />
          </div>
          <div className="nine columns main-col">
            <div className="aboutme">
              <h2>About Me</h2>

              <p className="bio">{bio}</p>
            </div>
            <div className="row">
              <div
                className="contact-details aboutme columns"
                style={{ marginRight: 0 }}
              >
                <h2>Contact Details</h2>
                <p className="address bio">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
