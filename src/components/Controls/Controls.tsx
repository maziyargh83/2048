"use client";
import TileBase from "@/components/Tile/TileBase";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { useMergeBlockGame } from "@/hook/useMergeBlockGame";
import { generateColor } from "@/lib/color";
import { useState } from "react";
import { v4 } from "uuid";

export const Controls = () => {
  const [show, setShow] = useState(false);
  const { createBlock, moveBlock, moveBlockBack, removeBlock, checkMerge } =
    useMergeBlockGame();
  const item = Math.floor(Math.random() * 6);

  return (
    <div>
      <div
        className="flex justify-between space-x-2"
        style={{
          width: config.width,
        }}
      >
        <Button onClick={() => createBlock(2)}>ADD</Button>
        <Button onClick={() => moveBlock()}>MOVE</Button>
        <Button onClick={() => moveBlockBack()}>MOVE back</Button>
        <Button onClick={() => removeBlock()}>REMOVE</Button>
        <Button onClick={() => setShow((prev) => !prev)}>Color</Button>
        <Button onClick={() => checkMerge()}>checkMerge</Button>
      </div>
      <div
        className="flex flex-wrap"
        style={{
          width: config.width,
        }}
      >
        {show &&
          Array.from(Array(13)).map((_, i) => {
            return (
              <div className="relative" key={v4()}>
                <TileBase absolute={false} color={generateColor(i)}>
                  {Math.pow(2, i + 1)}
                </TileBase>
              </div>
            );
          })}
      </div>
    </div>
  );
};
