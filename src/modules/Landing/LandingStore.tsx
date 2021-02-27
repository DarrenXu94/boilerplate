import { createStore, createHook, Action } from "react-sweet-state";

type Actions = typeof actions;

interface LandingStoreProps {
  data: any[];
}

const initialState: LandingStoreProps = {
  data: [],
};

const actions = {
  setData: (value): Action<LandingStoreProps> => ({ setState, getState }) => {
    // mutate state synchronously
    setState({
      data: value,
    });
  },
};

const LandingStore = createStore<LandingStoreProps, Actions>({
  initialState,
  actions,
});

export const useLandingStore = createHook(LandingStore);
