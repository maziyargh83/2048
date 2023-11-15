import { TileProps } from "@/types/TileType";
import { memo, useState } from "react";
import { Variants, motion } from "framer-motion";
import { useTileManager } from "@/hook/useTileManager";
import { cellHeight, cellWidth, config } from "@/config";
const variants: Variants = {
  falling: (top) => {
    return {
      width: "100%",
      height: "0%",
      bottom: "100%",
      background: "rgba(255,0,0,0.2)",
    };
  },
  falling2: (top) => {
    return {
      width: "100%",
      // height: config.height,
      height: "200px",
      bottom: "100%",
      background: "rgba(255,255,0,0.2)",
    };
  },
};
const TileSvg = () => {
  return (
    <svg
      viewBox="0 0 1672 500"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="rotate-180"
    >
      <path
        fill="rgba(47, 73, 94, 1)"
        d="M 0 200 C 117.5 200 117.5 31 235 31 L 235 31 L 235 0 L 0 0 Z"
        stroke-width="0"
      ></path>{" "}
      <path
        fill="rgba(47, 73, 94, 1)"
        d="M 234 31 C 357 31 357 467 480 467 L 480 467 L 480 0 L 234 0 Z"
        stroke-width="0"
      ></path>{" "}
      <path
        fill="rgba(47, 73, 94, 1)"
        d="M 479 467 C 583.5 467 583.5 117 688 117 L 688 117 L 688 0 L 479 0 Z"
        stroke-width="0"
      ></path>
      <path
        fill="rgba(47, 73, 94, 1)"
        d="M 687 117 C 822.5 117 822.5 438 958 438 L 958 438 L 958 0 L 687 0 Z"
        stroke-width="0"
      ></path>
      <path
        fill="rgba(47, 73, 94, 1)"
        d="M 957 438 C 1135.5 438 1135.5 95 1314 95 L 1314 95 L 1314 0 L 957 0 Z"
        stroke-width="0"
      ></path>
      <path
        fill="rgba(47, 73, 94, 1)"
        d="M 1313 95 C 1390.5 95 1390.5 408 1468 408 L 1468 408 L 1468 0 L 1313 0 Z"
        stroke-width="0"
      ></path>
      <path
        fill="rgba(47, 73, 94, 1)"
        d="M 1467 408 C 1574.5 408 1574.5 200 1682 200 L 1682 200 L 1682 0 L 1467 0 Z"
        stroke-width="0"
      ></path>
    </svg>
  );
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
      animate={isDone ? "falling" : "falling2"}
      variants={variants}
      onAnimationComplete={() => {
        // setIsDone(true);
      }}
    >
      <TileSvg />
    </motion.div>
  );
};
export const Tile = memo(TileBlock);
