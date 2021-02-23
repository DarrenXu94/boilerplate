import React from "react";
import { useCounter } from "~/main/stores/CounterStore";
import AboutView from "./AboutView";

export default function About() {
  const [{ count }, _] = useCounter();

  return (
    <div>
      <AboutView data={count + " from about"} />
    </div>
  );
}
