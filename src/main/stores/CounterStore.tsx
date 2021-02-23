import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    count: 0,
  },
  // actions that trigger store mutation
  actions: {
    increment: () => ({ setState, getState }) => {
      // mutate state synchronously
      setState({
        count: getState().count + 1,
      });
    },
  },
});

export const useCounter = createHook(Store);
