import React from "react";
import { useCounter } from "~/main/stores/CounterStore";
import { useLandingStore } from "../../LandingStore";
import BodyItemView from "./BodyItem/BodyItemView";
import BodyView from "./BodyView";

export default function Body() {
  const [{ count }, _] = useCounter();
  const [{ data }] = useLandingStore();

  const generateBodyItems = () => {
    return data.map((item) => {
      return <BodyItemView item={item} />;
    });
  };

  return (
    <div>
      <BodyView data={count.toString()} bodyItems={generateBodyItems} />
    </div>
  );
}
