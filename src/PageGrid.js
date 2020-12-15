import React, { useCallback, useEffect, useRef } from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "./components/VisibilitySensor";
import { useSpring, animated as a, interpolate } from "react-spring";
import img1 from "./img/img1.jpg";

export default function PageGrid() {
    return (
        <div className="padding-block" style={{ height: "100vh" }}>
        <div className="page__grid">

        <div className="small__text__container item-5">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
                <>
              <Spring
                delay={150}
                to={{
                  transform: isVisible
                    ? "translateY(0px) rotate(0deg)"
                    : "translateY(150px) rotate(25deg)",
                }}
              >
                {(props) => (
               
                  <h3 className="small__moving__text" style={{ ...props }}>
                  Cras molestie nunc est, id pellentesque 
                  </h3>
      
               
                )}
              </Spring>
              <Spring
          delay={0}
          to={{
            opacity: isVisible ? 1 : 0,
            width: isVisible ? "100%" : "0%",
          }}
        >
          {(props) => <div className="line-red" style={{ ...props }}></div>}
        </Spring>
       </>
            )}
          </VisibilitySensor>
        </div>
          <div className="page__item item-1">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <Spring
                  delay={150}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px) "
                      : "translateY(80px) ",
                  }}
                >
                  {(props) => (
                    <p className="page__text__item" style={{ ...props }}>
                    Estibulum at dolor neque. Vivamus vel tempus ante. Quisque congue suscipit dui eu pharetra. Donec vulputate est ipsum, sit amet porta tellus dignissim eu. Vestibulum malesuada vehicula maximus. 
                    </p>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>

          <div className=" page__item item-2">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <Spring
                  delay={150}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px) "
                      : "translateY(80px) ",
                  }}
                >
                  {(props) => (
                    <p className="page__text__item" style={{ ...props }}>
                    Sed placerat tellus viverra elit malesuada viverra sit amet eu augue. Integer dui nunc, auctor non enim sit amet, sagittis eleifend ex.
                    </p>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
          <div className="item-3 news__image" style={{backgroundImage: `url(${img1})`}}>
           
          </div>
          <div className=" page__item item-4">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <Spring
                  delay={150}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0px) "
                      : "translateY(80px) ",
                  }}
                >
                  {(props) => (
                    <p className="page__text__item" style={{ ...props }}>
                    Nunc pretium est in diam finibus iaculis. Pellentesque nulla lectus, imperdiet a orci sed, sagittis egestas velit.
                    </p>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    )
}