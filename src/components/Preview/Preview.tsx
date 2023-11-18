"use client";
import TileBase from "@/components/Tile/TileBase";
import { generateColor } from "@/lib/color";
import { previewTilesAtom } from "@/provider";
import clsx from "clsx";

import { useAtomValue } from "jotai";

export const Preview = () => {
  const previews = useAtomValue(previewTilesAtom);
  const preview = previews.slice(0, 2);
  return (
    <div className="flex items-center">
      {preview.map(({ size, id }, i) => {
        return (
          <TileBase
            key={id}
            className={clsx({
              ["scale-75"]: i != 0,
            })}
            absolute={false}
            color={generateColor(size)}
          >
            {size}
          </TileBase>
        );
      })}
    </div>
  );
};
