import "./Contact.css";

export default function Portfolio() {
  return (
    <div id="p2" className="contact">
      <h1>
        /Contact<span className="dot">.</span>
      </h1>
      <p>
        Shoot me an email if you want to connect! You can also find me on &nbsp;
        <a
          href="https://www.linkedin.com/in/anton-kraj%C5%88%C3%A1k-9225a694/"
          target="blank"
        >
          Linkedin
        </a>{" "}
        or{" "}
        <a href="https://twitter.com/BullkoSVK" target="blank">
          Twitter
        </a>{" "}
        if that's more your speed.
      </p>

      <div className="icons">
        <a href="https://github.com/Bullko" target="blank">
          <img className="contact-img" src="./img/github.png" />
        </a>
        <a href="https://codepen.io/BullsHI7" target="blank">
          <img className="contact-img" src="./img/codepen.png" />
        </a>
        <a>
          <img className="contact-img" src="./img/email.png" />
        </a>
      </div>
    </div>
  );
}
