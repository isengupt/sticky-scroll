import { Spring } from "react-spring/renderprops";



export default function Title({isVisible}) {
    return (
        <div className="title__container">
        <Spring
          delay={150}
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(200px)",
          }}
        >
          {(props) => <h2 style={{ ...props }}>NULLA UT </h2>}
        </Spring>
        <Spring
          delay={0}
          to={{
            opacity: isVisible ? 1 : 0,
            width: isVisible ? "100%" : "0%",
          }}
        >
          {(props) => <div className="line" style={{ ...props }}></div>}
        </Spring>

        <Spring
          delay={300}
          to={{
            opacity: isVisible ? 1 : 0,
            width: isVisible ? "100%" : "0%",
          }}
        >
          {(props) => <div className="line2" style={{ ...props }}></div>}
        </Spring>

        <Spring
          delay={450}
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(200px)",
          }}
        >
          {(props) => <h2 style={{ ...props }}>FINIBUS</h2>}
        </Spring>

        <Spring
          delay={600}
          to={{
            opacity: isVisible ? 1 : 0,
            width: isVisible ? "100%" : "0%",
          }}
        >
          {(props) => <div className="line3" style={{ ...props }}></div>}
        </Spring>
      </div>
    )
}