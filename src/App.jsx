import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skill from "./components/Skill";
import Resume from "./components/Resume";
function App() {
  const work = [
    {
      company: "Deloitte USI",
      date: "Oct 2022",
      position: "Associate Analyst",
      type: "Full-time",
      description: `I joined Deloitte in October 2022 as an Associate Analyst. 
      I'm now fully immersed in a project that involves utilizing technologies such as Angular, .NET, and React. 
      Currently, I’m primarily focusing on Angular and React, contributing to various aspects of the project’s development and implementation.`,
    },
    {
      company: "SuccessR",
      date: "June 2021 - August 2021",
      position: "React Developer",
      type: "Internship",
      description: `I have worked here as an intern for 3 months. They wanted to build a website to provide job opportunities like Indeed. 
      Frontend was on React. I led the team of 2 and developed one of the website's features.`,
    },
    {
      company: "Phasor Academy Pvt.Ltd",
      date: "August 2020 - March 2021",
      position: "Web Management, IT Head",
      type: "Full-time",
      description: `My role involved scheduling, web management, app handling, and overall IT management for the technical team (4 members). 
      I developed their website and managed their app as the client-side super admin. 
      I also handled digital marketing campaigns via Google My Business, Google Ads, and Google Maps, while creating hoardings in Adobe Illustrator.`,
    },
  ];
  return (
    <Fragment>
      <div className="w-100">
        <Header />
        <Intro />
        <About />
        <Skill />
        <Resume experiences={work} title={"Work Expierence"} />
         <Resume experiences={work} title={"Education"} />
      </div>
    </Fragment>
  );
}

export default App;
