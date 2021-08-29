import produce from "immer";
import create from "zustand";
import { combine } from "zustand/middleware";

type State = {
  pageNumber: number;
  deeplyNestedObect;
  actions;
  kdramas;
  // setPageNumber: (pageNumber: number) => void;
  // setDeeplyNested: (value) => void;
};

const useLandingStore = create<State>(
  combine(
    {
      pageNumber: 1,
      kdramas: [
        {
          id: 2,
          name: "River Where the Moon Rises",
        },
        {
          id: Math.floor(Math.random() * 100),
          name: "The Crowned Clown",
        },
      ],
      deeplyNestedObect: { first: { second: { third: 0, fourth: 1 } } },
    },
    (set) => ({
      actions: {
        addDrama: (payload) =>
          set(
            produce((draft) => {
              draft.kdramas.push({
                id: Math.floor(Math.random() * 100),
                name: "New",
              });
            })
          ),

        removeDrama: () =>
          set(
            produce((draft) => {
              const dramaIndex = draft.kdramas.findIndex((el) => el.id === 2);
              if (dramaIndex !== -1) {
                draft.kdramas.splice(dramaIndex, 1);
              }
            })
          ),

        setPageNumber: (pageNumber) => set(() => ({ pageNumber: pageNumber })),
        setDeeplyNested: (value) =>
          set((state) => {
            state.deeplyNestedObect.first.second.third = value;
          }),
      },
    })
  )
);

export default useLandingStore;
