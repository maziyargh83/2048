import { useState } from "react";
import { Variants, motion } from "framer-motion";
import { config } from "@/config";
const variants: Variants = {
  falling: (color) => ({
    width: "100%",
    height: config.height,
    bottom: "100%",
    background: color,
    opacity: 0.2,
  }),
  fall: (color) => ({
    width: "100%",
    height: "0%",
    bottom: "100%",
    background: color,
    opacity: 0.2,
  }),
};

interface TileAnimationProps {
  color: string;
}
export const TileAnimation = ({ color }: TileAnimationProps) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <motion.div
      className="absolute"
      animate={isDone ? "fall" : "falling"}
      variants={variants}
      custom={color}
      onAnimationComplete={() => {
        setIsDone(true);
      }}
    />
  );
};
