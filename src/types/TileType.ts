export enum AnimationTile {
  BOTH,
  LEFT,
  RIGHT,
  DOWN,
}
export interface TileProps {
  id: string;
  animation: AnimationTile;
  size: number;
  currentCell: number;
  currentPosition: number;
  isGhost: boolean;
}
