import { useState } from "react";
import { useEffect, useRef } from "react";
import "./Card.css";

import { motion, useInView, useAnimation } from "framer-motion";

export default function Card(props) {
  //hoverZoom
  const [isScale, setIsScale] = useState();

  const handleMouseEnter = () => {
    setIsScale(true);
  };
  const handleMouseLeave = () => {
    setIsScale(false);
  };

  return (
    <div className="portfolio-card">
      <motion.div
        className="container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: isScale ? "1.5" : "1" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img src={props.img} />
        <h3>{props.name}</h3>
        <p>{props.technology}</p>
      </motion.div>
    </div>
  );
}
