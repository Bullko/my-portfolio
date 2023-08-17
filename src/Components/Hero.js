import HeroStyles from "./Hero.css";
import { useState } from "react";

export default function Hero() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const color = {
    color: isHover ? "#374f80" : "#1a1c20",
    fontWeight: isHover ? "700" : "",
  };

  return (
    <div className="hero">
      <div className="profile-pic">
        <img />
      </div>
      <div className="profile-info">
        <h1
          style={color}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHover ? "Ahoj!" : "Hello!"}
        </h1>
        <p>
          Fuelled by a passion for designing things.<br></br> I have a deep
          passion to MTB and FRONTEND<br></br>in my life. Learn more about my
          journey below.
        </p>
      </div>
    </div>
  );
}
