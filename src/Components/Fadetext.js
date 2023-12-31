import { Fade } from "react-awesome-reveal";
import "./Hero.css";

export default function Fadetext() {
  return (
    <div className="fadetext">
      <div className="txt">
        <Fade delay={1e3} cascade damping={1e-3}>
          Fuelled by a passion for designing things.
        </Fade>
      </div>
      <Fade delay={2e3} cascade damping={1e-3}>
        I have a deep passion to MTB and FRONTEND.
      </Fade>
      <Fade delay={3e3} cascade damping={1e-3}>
        Learn more about my journey below.
      </Fade>
    </div>
  );
}
