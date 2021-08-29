import React, { useCallback, useEffect } from "react";
import { useSnapshot } from "valtio";
import { useCounter } from "~/main/stores/CounterStore";
import { useFetchTodos } from "../../LandingActions";
import useLandingState, {
  setDeeplyNested,
  setPageNumber,
} from "../../LandingStore";
import BodyItemView from "./BodyItem/BodyItemView";
import KDramas from "./BodyItem/KDramas";
import BodyView from "./BodyView";

export default function Body() {
  const [{ count }, _] = useCounter();

  const snap = useSnapshot(useLandingState);

  useEffect(() => {
    console.log({ obj: snap.deeplyNestedObect });
  }, [snap.deeplyNestedObect.first.second.fourth]);

  const { data } = useFetchTodos({ pageNumber: snap.pageNumber });

  const generateBodyItems = useCallback(() => {
    if (!data) return;
    return data.map((item) => {
      return <BodyItemView key={item.id} item={item} />;
    });
  }, [data]);

  return (
    <div>
      <KDramas />
      <h2>API</h2>
      <div>Page: {snap.pageNumber}</div>

      {JSON.stringify(snap.deeplyNestedObect)}

      <button
        onClick={() => {
          setDeeplyNested(snap.deeplyNestedObect.first.second.third + 1);
        }}
      >
        Set deeply nested
      </button>

      <button
        disabled={snap.pageNumber <= 1}
        onClick={() => {
          setPageNumber(snap.pageNumber - 1);
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          setPageNumber(snap.pageNumber + 1);
        }}
      >
        Next
      </button>

      <BodyView bodyItems={generateBodyItems} />
    </div>
  );
}
