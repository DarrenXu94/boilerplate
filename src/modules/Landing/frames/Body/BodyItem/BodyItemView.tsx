import React from "react";

interface BodyItemViewProps {
  item?;
}

export default function BodyItemView({ item }: BodyItemViewProps) {
  return (
    <div>
      <div>{item.id}</div>
      <div>{item.title}</div>
    </div>
  );
}
