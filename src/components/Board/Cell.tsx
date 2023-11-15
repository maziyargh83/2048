import { cellWidth, config } from "@/config";

export const Cell = () => {
  return (
    <div
      className="h-full bg-secondary"
      style={{
        width: cellWidth + "px",
      }}
    />
  );
};
