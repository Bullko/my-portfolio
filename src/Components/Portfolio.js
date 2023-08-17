import "./Portfolio.css";
import { Fade } from "react-awesome-reveal";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>/Portfolio</h1>
      <Fade delay={1e3} cascade damping={1e-2}>
        <div className="icons">
          <img src="./img/html.png" />
          <img src="./img/css.png" />
          <img src="./img/js.png" />
          <img src="./img/react.png" />
        </div>
      </Fade>
    </div>
  );
}
