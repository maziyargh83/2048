import { Cell } from "@/components/Board/Cell";
import { RenderTiles } from "@/components/Board/RenderTiles";
import { config } from "@/config";
import { v4 } from "uuid";

export const Board = () => {
  return (
    <div
      className={`relative bg-accent flex justify-between overflow-hidden rounded`}
      style={{
        width: config.width + "px",
        height: config.height + "px",
      }}
    >
      {Array.from(new Array(config.cols)).map(() => {
        return <Cell key={v4()} />;
      })}
      <RenderTiles />
    </div>
  );
};
