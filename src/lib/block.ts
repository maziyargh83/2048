import { AnimationTile, TileProps } from "@/types/TileType";
import { v4 } from "uuid";

export const createBlockObject = (
  id: string,
  cellNumber: number,
  currentPosition: number,
  size: number
) => {
  return {
    id,
    animation: AnimationTile.DOWN,
    currentCell: cellNumber,
    isGhost: false,
    size,
    currentPosition,
  };
};
export const createTile = (size: number): TileProps => {
  const id = v4();
  return {
    id,
    animation: AnimationTile.DOWN,
    currentCell: 0,
    isGhost: false,
    size,
  };
};
