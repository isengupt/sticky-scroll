import React, { useCallback, useEffect, useRef } from "react";
import { useSpring, animated as a, interpolate } from "react-spring";
import useWindowScroll from "@react-hook/window-scroll";
import useScrollWidth from "./useScrollWidth";

function ScrollCarousel({ children }) {
  const refHeight = useRef(null);
  const refTransform = useRef(null);

  const { scrollWidth } = useScrollWidth(refTransform);

  // the argument is the fps that the hook uses,
  // since react spring interpolates values we can safely reduce this below 60
  const scrollY = useWindowScroll(45);
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));

  useEffect(() => {
    set({ st: scrollY });
  }, [scrollY, set]);

  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
    []
  );

  const top = refHeight.current ? refHeight.current.offsetTop : 0;
  const width = refHeight.current ? refHeight.current.offsetWidth : 0;

  // we want to set the scrolling element *height* to the value of the *width* of the horizontal content
  // plus some other calculations to convert it from a width to a height value
  const elHeight =
    scrollWidth - (window.innerWidth - window.innerHeight) + width * 0.5; // scroll away when final viewport width is 0.5 done

  const interpTransform = interpolate([st, xy], (o, xy) => {
    const mouseMoveDepth = 40; // not necessary, but nice to have
    const x = width - (top - o) - width;

    // (width * 0.5) so that it starts moving just slightly before it comes into view
    if (x < -window.innerHeight - width * 0.5) {
      // element is not yet in view, we're currently above it. so don't animate the translate value
      return `translate3d(${window.innerHeight}px, 0, 0)`;
    }

    if (Math.abs(x) > elHeight) {
      // element is not in view, currently below it.
      return `translate3d(${elHeight}px, 0, 0)`;
    }

    // else animate as usual
    return `translate3d(${-x + -xy[0] / mouseMoveDepth}px, ${
      -xy[1] / mouseMoveDepth
    }px, 0)`;
  });

  return (
    <div
      onMouseMove={onMouseMove}
      className="scroll-carousel"
      ref={refHeight}
      style={{ height: elHeight }}
    >
      <div className="sticky-box">
        <a.div
          style={{ transform: interpTransform }}
          className="transform-box"
          ref={refTransform}
        >
          {children}
        </a.div>
      </div>
    </div>
  );
}

export default function ScrollComponent() {
  return (
    <ScrollCarousel>
      <div className="box">
        <div className="info__container">
          <div className="info__line"></div>
          <div className="info__title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>

          <div className="info__description">
            Nunc pretium est in diam finibus iaculis. Pellentesque nulla lectus,
            imperdiet a orci sed, sagittis egestas velit. Morbi euismod mi et
            egestas aliquam. Ut malesuada sapien at lobortis feugiat. Integer
            imperdiet pharetra lacus, non hendrerit ligula dapibus a. Maecenas
            molestie nunc enim, ac tristique ligula rhoncus in. Etiam vitae dui
            quis dui aliquet imperdiet. In leo lectus, porta in mi vel, laoreet
            consectetur odio. Cras accumsan id magna vel consectetur. Maecenas
            eu erat rutrum, pellentesque sem dictum, tincidunt augue.
            Suspendisse a nisl nec lacus facilisis fermentum. Praesent lobortis
            eros ac arcu iaculis ullamcorper. Praesent venenatis erat interdum,
            dictum sem eu, auctor nulla. Vivamus nec nulla feugiat, volutpat
            neque sit amet, convallis ligula. Donec elementum diam sollicitudin,
            aliquam sem ut, efficitur justo. Vivamus auctor sodales diam in
            consequat.
          </div>
        </div>
        <img
          src="https://picsum.photos/720/540/?image=88"
          alt=""
          className="img"
        />
      </div>
      <div className="box">
        <div className="info__container">
          <div className="info__line"></div>
          <div className="info__title">
          Mauris aliquet consequat tortor, ac luctus ligula volutpat quis.
          </div>

          <div className="info__description">
            Vestibulum at dolor neque. Vivamus vel tempus ante. Quisque congue
            suscipit dui eu pharetra. Donec vulputate est ipsum, sit amet porta
            tellus dignissim eu. Vestibulum malesuada vehicula maximus. Ut eu
            elit commodo, blandit metus quis, finibus libero. Suspendisse
            placerat nisl mauris, id vestibulum felis tristique sit amet.
            Integer venenatis vel diam ullamcorper convallis. Proin eget neque
            faucibus, porttitor velit a, sagittis sapien. Quisque volutpat ex
            maximus felis elementum ultrices. Nunc eget lorem tincidunt, cursus
            tortor vel, accumsan erat. In hac habitasse platea dictumst. Mauris
            aliquet consequat tortor, ac luctus ligula volutpat quis. Etiam sed
            metus eros. Ut at mattis massa. Sed placerat tellus viverra elit
            malesuada viverra sit amet eu augue. Integer dui nunc, auctor non
            enim sit amet, sagittis eleifend ex. Morbi ultricies, mauris
            elementum maximus sagittis, sapien ex dignissim nisl, eget fringilla
            diam mi pharetra dolor. Nunc ac ultrices orci, quis rutrum orci.
            Vestibulum augue turpis, sodales ac leo vel, facilisis sodales
            mauris. Nunc pretium enim vel leo tincidunt, eget mollis libero
            malesuada.
          </div>
        </div>
        <img
          src="https://picsum.photos/720/540/?image=512"
          alt=""
          className="img"
        />
      </div>

      <div className="box">
        <div className="info__container">
          <div className="info__line"></div>
          <div className="info__title">
          Vestibulum at dolor neque. Vivamus vel tempus ante. 
          </div>

          <div className="info__description">
            Vivamus nec nulla feugiat, volutpat neque sit amet, convallis
            ligula. Donec elementum diam sollicitudin, aliquam sem ut, efficitur
            justo. Vivamus auctor sodales diam in consequat. Cras molestie nunc
            est, id pellentesque ligula dictum at. Proin non leo quam. Proin nec
            lectus et ipsum finibus aliquet quis eu sapien. Sed id consequat
            erat. Donec maximus id arcu in mollis. Donec ac pretium nunc, non
            vehicula est. Nulla facilisi. Aliquam sagittis elementum mi, nec
            euismod est volutpat eu. Pellentesque augue augue, bibendum at felis
            sit amet, vulputate sagittis ligula. Aliquam tincidunt volutpat
            porttitor. Aenean non est eu lorem fermentum consectetur non ut
            risus. Maecenas augue purus, ornare id consequat ac, fringilla et
            erat. Quisque vitae auctor arcu, vitae dignissim nisl.
          </div>
        </div>
        <img
          src="https://picsum.photos/720/540/?image=472"
          alt=""
          className="img"
        />
      </div>
    </ScrollCarousel>
  );
}
