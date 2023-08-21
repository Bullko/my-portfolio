import { useState } from "react";
import "./Card.css";

import { motion } from "framer-motion";

export default function Card() {
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
        style={{ zIndex: isScale ? "2" : "1" }}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: isScale ? "1.5" : "1" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <h1>Ahoj</h1>
      </motion.div>
    </div>
  );
}
