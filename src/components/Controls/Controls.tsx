"use client";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { useMergeBlockGame } from "@/hook/useMergeBlockGame";

export const Controls = () => {
  const { createBlock, moveBlock, moveBlockBack, removeBlock } =
    useMergeBlockGame();
  const item = Math.floor(Math.random() * 6);

  return (
    <div
      className="flex justify-between"
      style={{
        width: config.width,
      }}
    >
      <Button onClick={() => createBlock(item)}>ADD</Button>
      <Button onClick={() => moveBlock()}>MOVE</Button>
      <Button onClick={() => moveBlockBack()}>MOVE back</Button>
      <Button onClick={() => removeBlock()}>REMOVE</Button>
    </div>
  );
};
