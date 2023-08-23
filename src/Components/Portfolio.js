import "./Portfolio.css";
import Showcase from "./Showcase";

export default function Portfolio() {
  return (
    <div id="p1" className="portfolio">
      <h1>
        /Portfolio<span className="dot">.</span>
      </h1>

      <div className="icons">
        <img src="./img/html.png" />
        <img src="./img/css.png" />
        <img src="./img/js.png" />
        <img src="./img/react.png" />
      </div>
      <Showcase />
    </div>
  );
}
