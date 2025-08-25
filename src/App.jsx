import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
function App() {
  return (
    <Fragment>
      <div className="w-100">
        <Header />
        <Intro />
        <About />
      </div>
    </Fragment>
  );
}

export default App;
