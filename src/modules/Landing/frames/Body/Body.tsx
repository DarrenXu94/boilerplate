import React, { useCallback, useEffect } from "react";
import { useCounter } from "~/main/stores/CounterStore";
import { useFetchTodos } from "../../LandingActions";
import useLandingStore from "../../LandingStore";
import BodyItemView from "./BodyItem/BodyItemView";
import BodyView from "./BodyView";
import shallow from "zustand/shallow";
import KDramas from "./BodyItem/KDramas";

export default function Body() {
  const [{ count }, _] = useCounter();
  const {
    pageNumber,
    deeplyNestedObectValue,
    deeplyNestedObectValueWatcher,
    actions: { setPageNumber, setDeeplyNested },
  } = useLandingStore(
    (state) => ({
      deeplyNestedObectValue: state.deeplyNestedObect.first.second.third,
      deeplyNestedObectValueWatcher:
        state.deeplyNestedObect.first.second.fourth,
      pageNumber: state.pageNumber,
      actions: state.actions,
    }),
    shallow
  );

  useEffect(() => {
    console.log({ deeplyNestedObectValueWatcher });
  }, [deeplyNestedObectValueWatcher]);

  const { data } = useFetchTodos({ pageNumber: pageNumber });

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
      <div>Page: {pageNumber}</div>

      {JSON.stringify(deeplyNestedObectValue)}

      <button
        onClick={() => {
          setDeeplyNested(deeplyNestedObectValue + 1);
        }}
      >
        Set deeply nested
      </button>

      <button
        disabled={pageNumber <= 1}
        onClick={() => {
          setPageNumber(pageNumber - 1);
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        Next
      </button>

      <BodyView bodyItems={generateBodyItems} />
    </div>
  );
}
