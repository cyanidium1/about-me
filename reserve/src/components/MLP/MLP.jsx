import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import StarsComponent from "../StarsComponent/StarsComponent";
import mountains from "../../images/background.webp";
import Message from "../Message/Message";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.div style={{ y: textY }} className="relative z-10">
        <Message />
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: backgroundY,
        }}
      >
        <StarsComponent />
      </motion.div>
      <div
        className="absolute inset-0 z-20 bg-no-repeat"
        style={{
          backgroundImage: `url(${mountains})`,
          backgroundPosition: "bottom",
          backgroundSize: "140%",
        }}
      />
    </div>
  );
}
