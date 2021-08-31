import { proxy } from "valtio";

const initialState = {
  currentToDos: [],
  pageNumber: 1,
};

const toDosState = proxy({
  ...initialState,
});

export default toDosState;

export const setCurrentToDos = (currentToDos) => {
  toDosState.currentToDos = currentToDos;
};

export const setPageNumber = (pageNumber) => {
  toDosState.pageNumber = pageNumber;
};
