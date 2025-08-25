import React from "react";


const About = () => {
  return (
    <section id="about-section" className="py-5 bg-black text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Ảnh bên trái */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className="about-img-wrapper">
              <img
                src="./images/profile.jpg"
                alt="Profile"
                className="img-fluid about-img"
              />
            </div>
          </div>

          {/* Nội dung bên phải */}
          <div className="col-md-7 text-start">
            <h2 className="fw-bold mb-3 position-relative about-title">
              About Me
              <span className="about-bg-text">About</span>
            </h2>
            <p >
              I accidentally discovered inspect element while watching my
              favorite show online. That was the Voila moment for me. The tags
              and syntaxes fascinated me so I decided to be friends with them
              and become a programmer.
            </p>
            <p>
              After countless bugs, coding tutorials, and several cups of
              coffee, I am now a full-stack developer.
            </p>
            <p>
              I code projects during the day and learn new programming languages
              during the night. Basically, I live in the coding terminal 24/7.
            </p>

            <h5 className="mt-4">
              <span className="text-warning fw-bold">10</span> Project complete
            </h5>

            <a
              href="./cv.pdf"
              download
              className="btn btn-warning rounded-pill px-4 fw-bold mt-3"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;