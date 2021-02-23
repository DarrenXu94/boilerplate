import React from "react";
interface IAboutView {
  data: string;
}
export default function AboutView({ data }: IAboutView) {
  return <div>{data}</div>;
}
