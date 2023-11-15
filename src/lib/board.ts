import { Board } from "@/types/provider";

export const createEmptyBoard = (): Board => {
  return Array.from({ length: 6 }, () => Array());
};
