import create from "zustand";

type State = {
  pageNumber: number;
  deeplyNestedObect;
  setPageNumber: (pageNumber: number) => void;
  setDeeplyNested: (value) => void;
};

const useLandingStore = create<State>((set) => ({
  pageNumber: 1,
  deeplyNestedObect: { first: { second: { third: 0, fourth: 1 } } },
  setPageNumber: (pageNumber) => set(() => ({ pageNumber: pageNumber })),
  setDeeplyNested: (value) =>
    set((state) => {
      state.deeplyNestedObect.first.second.third = value;
    }),
}));

export default useLandingStore;
