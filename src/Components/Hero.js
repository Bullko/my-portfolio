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
    fontWeight: isHover ? "400" : "",
  };

  return (
    <div className="hero">
      <motion.div
        className="profile-pic"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: "1" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img />
      </motion.div>
      <animated.div style={styles} className="profile-info">
        <h1
          style={color}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHover ? "Ahoj, volám sa Anton" : "Hey, I'm Anton"}
          <span className="dot">.</span>
        </h1>
        <p className="profile-text">
          <Fadetext />
        </p>
      </animated.div>
      <div className="bg"></div>
    </div>
  );
}
