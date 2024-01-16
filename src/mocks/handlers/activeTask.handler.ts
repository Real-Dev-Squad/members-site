import { rest } from 'msw';
const URL = process.env.NEXT_PUBLIC_BASE_URL;

const username = 'vinayak';

const activeTasksHandler = [
  rest.get(`${URL}/tasks/${username}?status=IN_PROGRESS`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Tasks returned successfully!',
        tasks: [],
      }),
    );
  }),
];

export default activeTasksHandler;
