import "./Contact.css";
import { Fade } from "react-awesome-reveal";

export default function Portfolio() {
  return (
    <div className="contact">
      <h1>/Contact</h1>
      <Fade delay={1e3} cascade damping={1e-2}>
        <div className="icons">
          <a href="https://github.com/Bullko" target="blank">
            <img className="contact-img" src="./img/github.png" />
          </a>
          <a>
            <img className="contact-img" src="./img/linkedin.png" />
          </a>
          <a>
            <img className="contact-img" src="./img/email.png" />
          </a>
        </div>
      </Fade>
    </div>
  );
}
