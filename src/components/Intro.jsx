import React from "react";
import "../css/Intro.css"; // chứa toàn bộ CSS bạn đã đưa

const Intro = () => {
  return (
    <section id="intro" className="hero intro col-12">
      <div className="intro-overlay"></div>

      <div className="intro-content">
        <div className="col-twelve">
          <h5>Hello, World.</h5>
          <h1>
            I'm <span className="typed-text">Aadarsh Thakur</span>
            <span className="curso">&nbsp;</span>
          </h1>

          <p className="intro-position">
            <span className="typed-text1">ANDROID</span>
            <span className="cursor1"></span>
          </p>

          <a
            className="button stroke smoothscroll"
            href="#about-section"
            title="More About Me"
          >
            More About Me
          </a>
        </div>
      </div>

      <ul className="intro-social">
        <li>
          <a
            href="https://www.facebook.com/thedebugarena/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/the_debug_arena/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/adarshT-03"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aadarsh-thakur-webdeveloper/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@thedebugarena"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Intro;