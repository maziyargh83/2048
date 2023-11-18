export enum AnimationTile {
  BOTH,
  LEFT,
  RIGHT,
  DOWN,
  FALL,
}
export interface TileProps {
  id: string;
  animation: AnimationTile;
  size: number;
  currentCell: number;
  currentPosition?: number;
  isGhost: boolean;
}
