import BaseTile from "@/components/Tile/TileBase";
import { TileAnimation } from "@/components/Tile/TileTail";
import { config } from "@/config";
import { useTileManager } from "@/hook/useTileManager";
import { generateColor } from "@/lib/color";
import { TileProps } from "@/types/TileType";
import { memo } from "react";

const Tile = ({ ...props }: TileProps) => {
  const { size, currentCell, currentPosition } = props;
  const { top, left } = useTileManager(currentCell, currentPosition);
  const color = generateColor(size, config.maxNumber);

  return (
    <BaseTile {...props} positionX={left} positionY={top} color={color}>
      <TileAnimation color={color} />
      {size}
    </BaseTile>
  );
};
export default memo(Tile);
