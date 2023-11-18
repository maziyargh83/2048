import BaseTile from "@/components/Tile/TileBase";
import { TileAnimation } from "@/components/Tile/TileTail";
import { useTileManager } from "@/hook/useTileManager";
import { generateColor } from "@/lib/color";
import { TileProps } from "@/types/TileType";
import { memo } from "react";

const Tile = ({ ...props }: TileProps) => {
  const { size, currentCell, currentPosition, animation } = props;
  const { top, left } = useTileManager(
    currentCell,
    currentPosition!,
    animation
  );
  const color = generateColor(size);

  return (
    <BaseTile {...props} positionX={left} positionY={top} color={color}>
      <TileAnimation animation={animation} color={color} />
      {size}
    </BaseTile>
  );
};
export default memo(Tile);
