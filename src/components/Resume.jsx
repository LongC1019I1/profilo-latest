import React from "react";
import { FaBriefcase } from "react-icons/fa";




const Resume = ({experiences, title}) => {
  return (
    <section id="resume-section" className="py-5 bg-black text-white">
      <div className="container">
        <h2 className="fw-bold text-center position-relative resume-title">
          Resume
          <span className="resume-bg-text">Resume</span>
        </h2>
        <h5 className="text-warning text-center mt-2 mb-5">
          {title}
        </h5>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              {/* Cột trái */}
              <div className="timeline-left">
                <h5 className="mb-1">{exp.company}</h5>
                <p className="text-muted small">{exp.date}</p>
              </div>

              {/* Icon giữa */}
              <div className="timeline-icon">
                <FaBriefcase />
              </div>

              {/* Cột phải */}
              <div className="timeline-right">
                <h6>
                  {exp.position}{" "}
                  <small className="text-muted">({exp.type})</small>
                </h6>
                <div className="underline"></div>
                <p className="mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;