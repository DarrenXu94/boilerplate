import { rest } from "msw";

import {
  BASE_URL,
  URL_EXTENSIONS,
} from "../library/common/constants/requestConstants";

export const handlers = [
  rest.get(BASE_URL + URL_EXTENSIONS.todos, (req, res, ctx) => {
    return res(
      ctx.json([
        { title: "Test", id: 1 },
        { title: "Test 2", id: 2 },
      ])
    );
  }),
];
