import React from "react";

interface BodyItemViewProps {
  item?;
}

export default function BodyItemView({ item }: BodyItemViewProps) {
  return <div>{item.title}Body item</div>;
}
