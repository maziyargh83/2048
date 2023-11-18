import { createTile } from "@/lib/block";
import { previewTilesAtom } from "@/provider";
import { TileProps } from "@/types/TileType";
import { useAtom } from "jotai";

export const usePreviewManager = () => {
  const [previews, setPreviews] = useAtom(previewTilesAtom);
  const addPreview = (tile: TileProps) => {
    const preview = [...previews, tile];
    setPreviews(preview);
  };
  const addPreviews = (tiles: TileProps[]) => {
    setPreviews(tiles);
  };
  const createPreview = (size: number) => {
    return createTile(size);
  };
  const getPreviews = () => {
    return previews;
  };
  const getFirstPreview = () => {
    return previews[0];
  };
  const removePreview = (id: string) => {
    const filteredPreview = previews.filter((i) => i.id !== id);
    setPreviews(filteredPreview);
  };
  const initialPreviews = () => {
    const tiles = [createPreview(2), createPreview(2)];
    addPreviews(tiles);
  };
  return {
    getPreviews,
    getFirstPreview,
    addPreview,
    initialPreviews,
    removePreview,
  };
};
