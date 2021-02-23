import React from "react";
import { useCounter } from "~/main/stores/CounterStore";
import NavbarView from "./NavbarView";

export default function Navbar() {
  const [_, { increment }] = useCounter();

  const handleOnClick = () => {
    increment();
  };
  return (
    <div>
      <NavbarView onClick={handleOnClick} />
    </div>
  );
}
