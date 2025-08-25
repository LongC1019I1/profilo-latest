import React, { useEffect, useRef, useState } from "react";
import "../css/Intro.css"; // chứa toàn bộ CSS bạn đã đưa

const Intro = () => {
  const typingRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const texts = [
      "a Web Developer",
      "a Blogger",
      "a Life Long Learner",
      "an Inner Coach",
    ];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      if (typingRef.current) {
        typingRef.current.textContent = letter;
      }

      if (letter.length === currentText.length) {
        setTimeout(erase, 1500); // Giữ chữ 1.5s
      } else {
        setTimeout(type, 150); // Tốc độ gõ
      }
    }

    function erase() {
      letter = currentText.slice(0, --index);
      if (typingRef.current) {
        typingRef.current.textContent = letter;
      }

      if (letter.length === 0) {
        count++;
        index = 0;
        setTimeout(type, 200); // Delay trước khi gõ tiếp
      } else {
        setTimeout(erase, 100); // Tốc độ xóa
      }
    }

    type();

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev); // blink dấu |
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

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
            <span
              className="color_main"
              id="typing"
              ref={typingRef}
              style={{ whiteSpace: "pre" }}
            ></span>
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
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
