import { boardAtom } from "@/provider";
import { useAtom } from "jotai";

export const useCellManager = () => {
  const [board, setBoard] = useAtom(boardAtom);
  const addNewItemToCell = (id: string, cellNumber: number) => {
    const boardTiles = [...board];
    const boardData = [...board[cellNumber], id];

    boardTiles.splice(cellNumber, 1, boardData);
    setBoard(boardTiles);
  };
  const removeItemInCell = (id: string, cellNumber: number) => {
    const boardTiles = [...board];
    const boardData = board[cellNumber].filter((i) => i !== id);

    boardTiles.splice(cellNumber, 1, boardData);
    setBoard(boardTiles);
    return boardData;
  };
  const getCellPosition = (cellNumber: number) => {
    return board[cellNumber].length;
  };
  return { addNewItemToCell, removeItemInCell, getCellPosition };
};
