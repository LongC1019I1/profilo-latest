
const skillsLeft = [
  { name: "HTML & CSS", percent: 90 },
  { name: "React JS", percent: 85 },
  { name: "My SQL & Mongo DB", percent: 75 },
  { name: "PHP", percent: 60 },
  { name: "Java", percent: 40 },
];

const skillsRight = [
  { name: "JavaScript", percent: 85 },
  { name: "React Native", percent: 80 },
  { name: "Node JS", percent: 60 },
  { name: "Angular", percent: 50 },
];

const Skills = () => {
  return (
    <section id="skills-section" className="py-5 bg-black text-white">
      <div className="container">
        <h2 className="fw-bold text-center position-relative skills-title">
          My Skills
          <span className="skills-bg-text">Skills</span>
        </h2>
        <p className="text-center text-muted mb-5">
          Always looking forward to learn new things but this is my primary
          skill set.
        </p>

        <div className="row">
          {/* Cột trái */}
          <div className="col-md-6">
            {skillsLeft.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="progress skill-progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Cột phải */}
          <div className="col-md-6">
            {skillsRight.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="progress skill-progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;