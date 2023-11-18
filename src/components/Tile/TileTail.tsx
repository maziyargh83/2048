import { useEffect, useState } from "react";
import { Variants, motion, useAnimation } from "framer-motion";
import { config } from "@/config";
import { TileProps } from "@/types/TileType";
import { usePrevProps } from "@/hook/usePrevProps";
const variants: Variants = {
  falling: (color) => ({
    width: "100%",
    height: config.height,
    bottom: "100%",
    background: color,
    opacity: 0.3,
  }),
  fall: (color) => ({
    width: "100%",
    height: "0%",
    bottom: "100%",
    background: color,
    opacity: 0.3,
  }),
};

interface TileAnimationProps {
  color: string;
  animation: TileProps["animation"];
}
export const TileAnimation = ({ color, animation }: TileAnimationProps) => {
  const [isDone, setIsDone] = useState(false);
  const boxControls = useAnimation();
  const prev_animation = usePrevProps(animation);

  useEffect(() => {
    boxControls.start("falling");
  }, []);
  useEffect(() => {
    if (!prev_animation || prev_animation == animation) return;
    boxControls.start("falling");
  }, [animation]);
  useEffect(() => {
    if (isDone) boxControls.start("fall");
  }, [isDone]);
  return (
    <motion.div
      className="absolute"
      animate={boxControls}
      variants={variants}
      custom={color}
      initial="fall"
      onAnimationComplete={() => {
        setIsDone(true);
      }}
    />
  );
};
