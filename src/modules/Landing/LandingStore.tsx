const kdramaObj = {
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
};

const pageNavObj = {
  pageNumber: 1,

  deeplyNestedObect: { first: { second: { third: 0, fourth: 1 } } },
};

import { proxy } from "valtio";
const state = proxy({
  ...kdramaObj,
  ...pageNavObj,
});

export default state;

export const addDrama = () => {
  state.kdramas.push({
    id: Math.floor(Math.random() * 100),
    name: "New",
  });
};

export const removeDrama = () => {
  const dramaIndex = state.kdramas.findIndex((el) => el.id === 2);
  if (dramaIndex !== -1) {
    state.kdramas.splice(dramaIndex, 1);
  }
};

export const setPageNumber = (pageNumber) => {
  state.pageNumber = pageNumber;
};

export const setDeeplyNested = (value) => {
  state.deeplyNestedObect.first.second.third = value;
};
