import VisibilitySensor from "./components/VisibilitySensor";
import { Spring } from "react-spring/renderprops";

import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
export default  function HeroImage() {
return (
    <div className="padding-block" style={{ height: "100vh" }}>
    <div className="text__grid">
      <div
        className="text__img"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>
      <div className="text__grid__left">
        <div className="text__container">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                delay={150}
                to={{
                  transform: isVisible
                    ? "translateY(0px) rotate(0deg)"
                    : "translateY(300px) rotate(20deg)",
                }}
              >
                {(props) => (
                  <h3 className="moving__text" style={{ ...props }}>
                  Suspendisse
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
        <div className="text__container">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                delay={250}
                to={{
                  transform: isVisible
                    ? "translateY(0px) rotate(0deg)"
                    : "translateY(300px) rotate(-20deg)",
                }}
              >
                {(props) => (
                  <h3 className="moving__text" style={{ ...props }}>
                  Donec vulputate
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
        <div className="text__container">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                delay={250}
                to={{
                  transform: isVisible
                    ? "translateY(0px) rotate(0deg)"
                    : "translateY(300px) rotate(20deg)",
                }}
              >
                {(props) => (
                  <h3 className="moving__text" style={{ ...props }}>
                  Vivamus molestie
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>

        <div className="text__description">
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
                    Sed placerat <span className="description__span">Elit</span>{" "}
                    tellus viverra
                    </div>
                    <div className="description__small">
                    Ut at mattis massa
                    </div>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
      </div>

      <div className="text__grid__right"></div>
    </div>
  </div>
)
}