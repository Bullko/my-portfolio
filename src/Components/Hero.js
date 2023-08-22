import "./Hero.css";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";
import Fadetext from "./Fadetext";

export default function Hero() {
  const styles = useSpring({
    loop: false,
    from: { opacity: "0", transform: "perspective(800px) rotateX(100deg)" },
    to: { opacity: "1", transform: "perspective(600px) rotateX(0deg)" },
    config: { duration: "900" },
  });

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const color = {
    color: isHover ? "#374f80" : "#1a1c20",
    fontWeight: isHover ? "400" : "",
  };

  return (
    <div className="hero">
      <animated.div style={styles} className="profile-pic"></animated.div>
      <animated.div style={styles} className="profile-info">
        <h1
          style={color}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHover ? "Ahoj!!" : "Hello!"}
        </h1>
        <p className="profile-text">
          <Fadetext />
        </p>
        <img />
      </animated.div>
    </div>
  );
}
