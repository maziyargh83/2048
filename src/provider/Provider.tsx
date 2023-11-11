import { createEmptyBoard } from "@/lib/board";
import { Board, History } from "@/types/provider";
import { atom } from "jotai";
export const boardAtom = atom<Board>(createEmptyBoard());
export const historyAtom = atom<History>([]);
