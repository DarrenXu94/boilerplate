import React from "react";
interface AboutViewProps {
  data: string;
}
export default function AboutView({ data }: AboutViewProps) {
  return <div>{data}</div>;
}
