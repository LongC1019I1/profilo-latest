import React, { useState, useEffect } from "react";
import "../css/Header.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("intro");

  const navItems = [
    { id: "intro", name: "Home" },
    { id: "about-section", name: "About" },
    { id: "skills-section", name: "Skills" },
    { id: "resume-section", name: "Resume" },
    { id: "services-section", name: "Services" },
    { id: "projects-section", name: "Projects" },
    { id: "blog-section", name: "YouTube" },
    { id: "contact-section", name: "Contact" },
  ];

  // Lắng nghe scroll để highlight active menu
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (let item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(item.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#intro">
          <img
            src="./images/logo3-01-01.webp"
            alt="Logo"
            className="me-2"
            style={{ width: "32px", height: "32px", borderRadius: "50%" }}
          />
          <strong className="text-uppercase">Aadarsh</strong>
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item mx-3" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link custom-link ${
                    activeSection === item.id ? "active-link" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;