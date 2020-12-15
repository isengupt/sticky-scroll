import React, { useCallback, useEffect, useRef } from "react";

import VisibilitySensor from "./components/VisibilitySensor";
import { Spring } from "react-spring/renderprops";

import img1 from "./img/img1.jpg";

export default function Footer() {
  return (
    <div className="padding-block" style={{ height: "100vh" }}>
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__description__container">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <Spring
                  delay={250}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px)"
                      : "translateY(90px)",
                  }}
                >
                  {(props) => (
                    <div style={{ ...props }} className="footer__description">
                      <div className="footer__description__big">
                      Maecenas ullamcorper eros et erat{" "}
                        <span className="footer__description__span">
                   SEMPER
                        </span>{" "}
                      </div>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                delay={250}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0px)" : "translateY(90px)",
                }}
              >
                {(props) => (
                  <div
                    className="footer__img"
                    style={{ backgroundImage: `url(${img1})`, ...props }}
                  ></div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom__left">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <Spring
                  delay={250}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px)"
                      : "translateY(90px)",
                  }}
                >
                  {(props) => (
                    <div
                      className="footer__img"
                      style={{ backgroundImage: `url(${img1})`, ...props }}
                    ></div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>

          <div className="footer__bottom__right">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <Spring
                  delay={250}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px)"
                      : "translateY(90px)",
                  }}
                >
                  {(props) => (
                    <div style={{ ...props }} className="text__description">
                      <div className="description__big">
                        Nunc ac {" "}
                        <span className="description__span">ultrices</span>{" "}
                        tincidunt
                      </div>
                      <div className="description__small">
                      Nunc pretium enim vel leo tincidunt
                      </div>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </div>
  );
}
