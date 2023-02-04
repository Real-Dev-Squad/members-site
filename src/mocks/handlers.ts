/**Third Party Dependencies*/
import { rest } from "msw";

/**Constants */

import { MOCK_GET_URL, MOCK_DATA } from "../constants/mock.test.constants";

export const handlers = [
  rest.get(MOCK_GET_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: MOCK_DATA }));
  }),
];
