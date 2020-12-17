import React, { useCallback, useEffect, useRef } from "react";

import VisibilitySensor from "./components/VisibilitySensor";

import Title from "./Title";

import "./styles.css";
import HeroImage from "./HeroImage";
import PageGrid from "./PageGrid";
import Footer from "./Footer";
import ScrollComponent from "./ScrollComponent";

export default function App() {
  return (
    <>
        <div className="frame">
        <h1 className="frame__title">Front-End Experimentaion</h1>
        <div className="frame__links">
         
        </div>
        <div className="frame__nav">
        <a className="frame__link" href="https://isengupt.github.io/particles-image/">
            Previous
          </a>
          <a className="frame__link" href="#">
            Resume
          </a>
          <a className="frame__link" href="https://github.com/isengupt/sticky-scroll">
            GitHub
          </a>
        </div>
      </div>
    <div className="container">
      <div className="padding-block" style={{ height: "90vh" }}>
        <VisibilitySensor once>
          {({ isVisible }) => <Title isVisible={isVisible} />}
        </VisibilitySensor>
      </div>

      <HeroImage />

      <ScrollComponent />

      <PageGrid />
      <Footer />
    </div>
    </>
  );
}
