import { AnimationTile, TileProps } from "@/types/TileType";
import { v4 } from "uuid";

export function getInitialTileNumber(count: number, startFrom: number = 2) {
  let sequence = [startFrom];
  for (let i = 1; i < count; i++) {
    sequence.push(sequence[i - 1] * 2);
  }
  return sequence;
}

export const createTile = (size: number): TileProps => {
  const id = v4();
  return {
    id,
    animation: AnimationTile.FALL,
    currentCell: 0,
    isGhost: false,
    size,
  };
};
export const getRandomIndex = (array: number[]) => {
  if (array.length === 0) {
    return 0; // Return null if the array is empty
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
};
