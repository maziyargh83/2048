import { Board } from "@/components/Board/Board";
import { Controls } from "@/components/Controls/Controls";

export default function Game() {
  return (
    <div className="w-full min-h-screen flex-col gap-3 flex justify-center items-center">
      <Board />
      <Controls />
    </div>
  );
}
