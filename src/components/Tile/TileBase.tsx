import { PropsWithChildren, memo } from "react";
import { type MotionValue, motion } from "framer-motion";
import { cellHeight, cellWidth } from "@/config";
import clsx from "clsx";

interface TileBlockProps {
  positionY?: MotionValue<string>;
  positionX?: MotionValue<string>;
  absolute?: boolean;
  className?: string;
  color: string;
}
const TileBlock = ({
  children,
  positionY,
  positionX,
  color,
  absolute = true,
  className,
}: PropsWithChildren<TileBlockProps>) => {
  return (
    <motion.div
      style={{
        bottom: positionY,
        left: positionX,
        width: cellWidth + "px",
        height: cellHeight + "px",
      }}
      className={clsx(
        "rounded p-2",
        {
          ["absolute"]: absolute,
        },
        className
      )}
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
