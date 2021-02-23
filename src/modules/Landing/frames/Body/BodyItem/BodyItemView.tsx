import React from "react";

interface IBodyItemView {
  item?;
}

export default function BodyItemView({ item }: IBodyItemView) {
  return <div>{item.title}Body item</div>;
}
