import { rest } from 'msw'
import { selfUser } from '../db/user'
const URL = process.env.NEXT_PUBLIC_BASE_URL

const selfUserHandler = [
  rest.get(`${URL}/users/self`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(selfUser))
  }),
]

export default selfUserHandler
