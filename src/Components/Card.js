import { useState } from "react";
import "./Card.css";

import { motion } from "framer-motion";
import zIndex from "@mui/material/styles/zIndex";

export default function Card() {
  //hoverZoom
  const [isScale, setIsScale] = useState();

  const handleMouseEnter = () => {
    setIsScale(true);
  };
  const handleMouseLeave = () => {
    setIsScale(false);
  };
  //hoverIndex
  const [index, setIndex] = useState(false);
  const indexEnter = () => {
    setIsScale(true);
  };
  const indexLeave = () => {
    setIsScale(false);
  };

  return (
    <div className="portfolio-card">
      <motion.div
        className="container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ zIndex: index ? "1" : "2" }}
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
