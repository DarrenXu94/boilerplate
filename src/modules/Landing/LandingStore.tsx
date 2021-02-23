import { createStore, createHook, Action } from "react-sweet-state";

type Actions = typeof actions;

interface ILandingStore {
  data: any[];
}

const initialState: ILandingStore = {
  data: [],
};

const actions = {
  setData: (value): Action<ILandingStore> => ({ setState, getState }) => {
    // mutate state synchronously
    setState({
      data: value,
    });
  },
};

const LandingStore = createStore<ILandingStore, Actions>({
  initialState,
  actions,
});

export const useLandingStore = createHook(LandingStore);
