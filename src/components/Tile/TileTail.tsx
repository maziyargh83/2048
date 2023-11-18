import { useEffect, useState } from "react";
import { Variants, motion, useAnimation, AnimatePresence } from "framer-motion";
import { config } from "@/config";
import { AnimationTile, TileProps } from "@/types/TileType";
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
  merging: (color) => ({
    width: "100%",
    height: "40px",
    bottom: "100%",
    background: color,
    opacity: 0.3,
  }),
  merged: (color) => ({
    width: "100%",
    height: "0px",
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
    setIsDone(false);

    boxControls.start("merging");
  }, [animation]);
  useEffect(() => {
    if (isDone) {
      switch (animation) {
        case AnimationTile.FALL:
          boxControls.start("fall");

          break;
        case AnimationTile.DOWN:
          boxControls.start("fall");
          break;
      }
    }
  }, [isDone]);
  return (
    <motion.div
      className="absolute"
      animate={boxControls}
      variants={variants}
      custom={color}
      initial={AnimationTile.DOWN == animation ? "merged" : "fall"}
      onAnimationComplete={() => {
        setIsDone(true);
      }}
    >
      <AnimatePresence>
        {!isDone && animation == AnimationTile.DOWN && (
          <motion.svg
            width="294"
            viewBox="0 0 294 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[95%] w-full "
            onAnimationComplete={() => {
              setIsDone(true);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.path
              d="M117 33C117 14.7746 131.775 0 150 0C168.225 0 183 14.7746 183 33V173.474C185.567 177.377 189.006 180.655 193.039 183.031C197.211 186.152 202.39 188 208 188C212.186 188 216.132 186.971 219.598 185.153C224.975 183.051 229.61 179.467 233 174.904V113.5C233 96.6553 246.655 83 263.5 83C280.345 83 294 96.6553 294 113.5V280H142H0V66.5C0 49.6553 13.6553 36 30.5 36C47.3447 36 61 49.6553 61 66.5V117C61 115.642 61.0967 114.306 61.2836 113C63.2245 126.569 74.8941 137 89 137C103.106 137 114.776 126.569 116.716 113C116.903 114.306 117 115.642 117 117V33Z"
              fill={color}
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
