import { AnimationTile, TileProps } from "@/types/TileType";
import { useAtom } from "jotai";
import { v4 } from "uuid";
import { tilesAtom } from "@/provider";
import { useCellManager } from "@/hook/useCellManager";
export const useMergeBlockGame = () => {
  const [tiles, setTiles] = useAtom(tilesAtom);
  const { addNewItemToCell, removeItemInCell, getCellPosition } =
    useCellManager();
  const createBlock = (cellNumber: number = 1) => {
    const id = v4();
    const newMap = new Map(tiles);

    const cell: TileProps = {
      id,
      animation: AnimationTile.DOWN,
      currentCell: cellNumber,
      isGhost: false,
      size: 2,
      currentPosition: getCellPosition(cellNumber),
    };
    newMap.set(id, cell);
    setTiles(newMap);
    addNewItemToCell(id, cellNumber);
  };
  const updateAllCurrentPositionToDown = (
    resultMap: typeof tiles,
    tilesResult: string[]
  ) => {
    const newMap = new Map(resultMap);
    tilesResult.map((item) => {
      const data = newMap.get(item)!;
      console.log("====================================");
      console.log({ item, newMap });
      console.log("====================================");
      const index = tilesResult.findIndex((d) => d == data?.id);
      newMap.set(item, { ...data, currentPosition: index });
    });
    return newMap;
  };
  const removeBlock = () => {
    const newMap = new Map(tiles);
    const firstBlock = getFirstBlock();
    const tilesResult = removeItemInCell(firstBlock.id, firstBlock.currentCell);
    newMap.delete(firstBlock.id)!;

    const resultMap = updateAllCurrentPositionToDown(newMap, tilesResult);
    setTiles(resultMap);
  };

  const moveBlock = () => {
    const newMap = new Map(tiles);
    const firstBlock = getFirstBlock();

    const tile = newMap.get(firstBlock.id)!;
    const tilesResult = removeItemInCell(firstBlock.id, firstBlock.currentCell);
    tile.currentCell = tile.currentCell + 1;
    const resultMap = updateAllCurrentPositionToDown(newMap, tilesResult);

    setTiles(resultMap);
  };

  const moveBlockBack = () => {
    const newMap = new Map(tiles);
    const firstBlock = getFirstBlock();

    const tile = newMap.get(firstBlock.id)!;
    tile.currentCell = tile.currentCell - 1;
    setTiles(newMap);
  };
  const getFirstBlock = () => {
    return Array.from(tiles.values())[0];
  };
  return { createBlock, moveBlock, moveBlockBack, removeBlock };
};
