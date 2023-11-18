import { createTile, getInitialTileNumber, getRandomIndex } from "@/lib/block";
import { availableAtom, currentSizeAtom, previewTilesAtom } from "@/provider";
import { TileProps } from "@/types/TileType";
import { useAtom } from "jotai";

export const usePreviewManager = () => {
  const [previews, setPreviews] = useAtom(previewTilesAtom);
  const [availableTiles, setAvailableTiles] = useAtom(availableAtom);
  const [currentSize, setCurrentSize] = useAtom(currentSizeAtom);
  const addPreview = (tile: TileProps) => {
    const preview = [...previews, tile];
    setPreviews(preview);
  };
  const addPreviews = (tiles: TileProps[]) => {
    setPreviews(tiles);
  };
  const createPreview = (size?: number) => {
    const tileSize = size || availableTiles[getRandomIndex(availableTiles)];
    return createTile(tileSize);
  };
  const getPreviews = () => {
    return previews;
  };
  const getFirstPreview = () => {
    return previews[0];
  };
  const extendsAvailable = () => {
    const size = currentSize + 1;
    setCurrentSize(size);
    setAvailableTiles(getInitialTileNumber(size));
  };
  const removePreview = (id: string) => {
    const filteredPreview = previews.filter((i) => i.id !== id);
    setPreviews([...filteredPreview, createPreview()]);
  };
  const initialPreviews = () => {
    const tiles = [createPreview(2), createPreview(2), createPreview(4)];
    addPreviews(tiles);
  };
  return {
    getPreviews,
    getFirstPreview,
    addPreview,
    initialPreviews,
    removePreview,
    extendsAvailable,
  };
};
