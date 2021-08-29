import React, { useCallback } from "react";
import { useCounter } from "~/main/stores/CounterStore";
import { useFetchTodos } from "../../LandingActions";
import { useLandingStore } from "../../LandingStore";
import BodyItemView from "./BodyItem/BodyItemView";
import BodyView from "./BodyView";

export default function Body() {
  const [{ count }, _] = useCounter();
  const [{ pageNumber }, { setPageNumber }] = useLandingStore();

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
