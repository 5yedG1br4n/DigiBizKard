import React from "react";
import "./MainContent.css";
import TwitterLogo from "./Twitter Icon.png";
import FacebookIcon from "./Facebook Icon.png";
import InstaIcon from "./Instagram Icon.png";
import GitHubIcon from "./GitHub Icon.png";
import MyImage from "./gibran.jpg";
import LinkedInIcon from "./linkedin.png";
import MailIcon from "./Mail.png";

export default function MainContent() {
  return (
    <>
      <div className="container">
        <div className="img-container">
          <img src={MyImage} alt="A picture of Me" className="main-img" />
        </div>
        <div className="sub-container">
          <h2 className="name">Syed Gibran</h2>
          <h4 className="role">Frontend Developer</h4>
          <h5 className="website">5yedG1br4n.com</h5>
          <div className="connect">
            <a href="mailto:5yed@gmail.com" className="mail">
              <img src={MailIcon} alt="Mail logo" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/syedgibran/"
              className="linkedin"
              target="_blank"
            >
              <img src={LinkedInIcon} alt="LinkedIn icon" />
              LinkedIn
            </a>
          </div>
          <div className="about">
            <h3>About</h3>
            <p>
              I am a frontend developer with a particular interest in building
              things. I try to keep up with security and best practices, and am
              always looking for new things to learn.
            </p>
          </div>
          <div className="interests">
            <h3>Interests</h3>
            <p>
              Art. Music. Stand-up Comedy. Sports. Travelling. I like connecting
              with new people.
            </p>
          </div>
        </div>
        <footer className="footer">
          <a href="https://twitter.com/" target="_blank">
            <img className="twitter" src={TwitterLogo} alt="Twitter logo"></img>
          </a>
          <a
            href="https://www.facebook.com/jibran.grimidentity"
            target="_blank"
          >
            <img
              className="facebook"
              src={FacebookIcon}
              alt="Facebook logo"
            ></img>
          </a>
          <a href="https://www.instagram.com/grimidentity/" target="_blank">
            <img className="instagram" src={InstaIcon} alt="Insta logo"></img>
          </a>
          <a href="https://github.com/5yedG1br4n" target="_blank">
            <img className="github" src={GitHubIcon} alt="GitHub logo"></img>
          </a>
        </footer>
      </div>
    </>
  );
}
