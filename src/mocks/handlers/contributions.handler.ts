import { rest } from 'msw';
import { allContributionsData } from '../db/contributions';
const URL = process.env.NEXT_PUBLIC_BASE_URL;

const username = 'vinayak';

const contributionsHandler = [
  rest.get(`${URL}/contributions/${username}`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        noteworthy: [],
        all: allContributionsData,
      }),
    );
  }),
];

export default contributionsHandler;
