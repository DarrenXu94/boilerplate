import { createStore, createHook, Action } from "react-sweet-state";

type Actions = typeof actions;

interface LandingStoreProps {
  pageNumber: number;
}

const initialState: LandingStoreProps = {
  pageNumber: 1,
};

const actions = {
  setPageNumber: (value): Action<LandingStoreProps> => ({
    setState,
    getState,
  }) => {
    setState({
      pageNumber: value,
    });
  },
};

const LandingStore = createStore<LandingStoreProps, Actions>({
  initialState,
  actions,
});

export const useLandingStore = createHook(LandingStore);
