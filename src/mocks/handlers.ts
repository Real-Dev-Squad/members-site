import { rest } from "msw";

export const handlers = [
  rest.get("https://real-dev-squad.com", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ data: ["members-site", "real-dev", "real-dev-squad"] })
    );
  }),
];
