import { PropsWithChildren, memo } from "react";
import { type MotionValue, motion } from "framer-motion";
import { cellHeight, cellWidth } from "@/config";

interface TileBlockProps {
  positionY?: MotionValue<string>;
  positionX?: MotionValue<string>;
  color: string;
}
const TileBlock = ({
  children,
  positionY,
  positionX,
  color,
}: PropsWithChildren<TileBlockProps>) => {
  return (
    <motion.div
      style={{
        bottom: positionY,
        left: positionX,
        width: cellWidth + "px",
        height: cellHeight + "px",
      }}
      className="absolute rounded p-2"
    >
      <motion.div
        animate={{
          background: color,
        }}
        className="w-full h-full rounded flex justify-center items-center relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default memo(TileBlock);
