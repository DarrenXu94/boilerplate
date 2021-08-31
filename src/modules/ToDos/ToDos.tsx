import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import Pagination from "~/library/common/components/Pagination/Pagination";
import { PAGE_SIZE } from "~/library/common/constants/requestConstants";
import ListOfToDos from "./frames/ListOfToDos";
import { useFetchTodos } from "./ToDosActions";
import toDosState, { setCurrentToDos, setPageNumber } from "./ToDosStore";

export interface ToDosProps {}

export default function ToDos({}: ToDosProps) {
  const snap = useSnapshot(toDosState);
  const { data, isLoading } = useFetchTodos();

  useEffect(() => {
    if (!data) return;
    const newSlice = data.slice(
      (snap.pageNumber - 1) * PAGE_SIZE,
      snap.pageNumber * PAGE_SIZE
    );
    setCurrentToDos(newSlice);
  }, [snap.pageNumber, data]);

  if (isLoading) return <>Loading"</>;

  return (
    <div>
      <h1>To Dos</h1>
      {data && (
        <Pagination
          totalPages={Math.ceil(data.length / PAGE_SIZE)}
          pageNumber={snap.pageNumber}
          onPreviousClick={() => {
            setPageNumber(snap.pageNumber - 1);
          }}
          onNextClick={() => {
            setPageNumber(snap.pageNumber + 1);
          }}
        />
      )}
      <ListOfToDos data={snap.currentToDos} />
    </div>
  );
}
