import { getInitialTileNumber } from "@/lib/block";
import { createEmptyBoard } from "@/lib/board";
import { TileProps } from "@/types/TileType";
import { Board, History } from "@/types/provider";
import { atom } from "jotai";
export const boardAtom = atom<Board>(createEmptyBoard());
export const tilesAtom = atom<Map<string, TileProps>>(new Map());
export const historyAtom = atom<History>([]);
export const previewTilesAtom = atom<TileProps[]>([]);
export const currentSizeAtom = atom(6);
export const availableAtom = atom<number[]>(
  getInitialTileNumber(currentSizeAtom.init)
);
export const disabledTileAtom = atom<number[]>([]);
