import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:70,
      strings: ["よっ", "よかったら" ,"塩振りますよ"],
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
          <h2>こんにちは</h2>
          <h1>久保田佳祐です</h1>
          <h3>
            あの <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
