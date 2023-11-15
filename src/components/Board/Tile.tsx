import { TileProps } from "@/types/TileType";
import { memo, useState } from "react";
import { Variants, motion } from "framer-motion";
import { useTileManager } from "@/hook/useTileManager";
import { cellHeight, cellWidth, config } from "@/config";
const variants: Variants = {
  falling: {},
  fall: {},
};

const TileBlock = ({ size, currentCell, currentPosition }: TileProps) => {
  const { top, left } = useTileManager(currentCell, currentPosition);

  return (
    <motion.div
      style={{
        bottom: top,
        left: left,
        width: cellWidth + "px",
        height: cellHeight + "px",
      }}
      className="absolute rounded p-2"
    >
      <div className="bg-accent w-full h-full rounded flex justify-center items-center relative">
        <TileAnimation />
        {size}
      </div>
    </motion.div>
  );
};
const TileAnimation = () => {
  const [isDone, setIsDone] = useState(false);
  return (
    <motion.div
      className="absolute"
      animate={isDone ? "falling" : "fall"}
      variants={variants}
      onAnimationComplete={() => {
        setIsDone(true);
      }}
    ></motion.div>
  );
};
export const Tile = memo(TileBlock);
