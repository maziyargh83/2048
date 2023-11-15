"use client";
import TileAnimated from "@/components/Tile/TileAnimated";
import { tilesAtom } from "@/provider";
import { useAtomValue } from "jotai/react";
import { Fragment } from "react";

export const RenderTiles = () => {
  const tiles = useAtomValue(tilesAtom);
  return (
    <Fragment>
      {Array.from(tiles.entries()).map(([key, data], i) => {
        return <TileAnimated key={key} {...data} />;
      })}
    </Fragment>
  );
};
