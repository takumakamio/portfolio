import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:0,
      strings: ["3", "2" ,"1","ダー"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/ksk.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>俺が社長の</h2>
          <h1>久保田佳祐</h1>
          <h3>
            やる気があれば何でもできる <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
