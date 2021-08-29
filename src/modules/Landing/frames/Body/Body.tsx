import React, { useCallback, useEffect } from "react";
import { useCounter } from "~/main/stores/CounterStore";
import { useFetchTodos } from "../../LandingActions";
import useLandingStore from "../../LandingStore";
import BodyItemView from "./BodyItem/BodyItemView";
import BodyView from "./BodyView";
import shallow from "zustand/shallow";

export default function Body() {
  const [{ count }, _] = useCounter();
  // const [{ pageNumber }, { setPageNumber }] = useLandingStore();
  const {
    pageNumber,
    setPageNumber,
    deeplyNestedObectValue,
    deeplyNestedObectValueWatcher,
    setDeeplyNested,
  } = useLandingStore(
    (state) => ({
      deeplyNestedObectValue: state.deeplyNestedObect.first.second.third,
      deeplyNestedObectValueWatcher:
        state.deeplyNestedObect.first.second.fourth,
      pageNumber: state.pageNumber,
      setPageNumber: state.setPageNumber,
      setDeeplyNested: state.setDeeplyNested,
    }),
    shallow
  );
  // const setPageNumber = useLandingStore((state) => state.setPageNumber);

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
