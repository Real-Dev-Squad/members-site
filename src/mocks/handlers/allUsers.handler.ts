import { rest } from 'msw'
import { usersData } from '../db/allUsers'
const URL = process.env.NEXT_PUBLIC_BASE_URL

const username = 'vinayak'

const allUsersHandler = [
  rest.get(`${URL}/users`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Users returned successfully!',
        users: usersData,
      }),
    )
  }),
  rest.patch(`${URL}/members/moveToMembers/${username}`, (req, res, ctx) => {
    return res(ctx.status(204))
  }),
  rest.patch(`${URL}/members/archiveMembers/${username}`, (req, res, ctx) => {
    return res(ctx.status(204))
  }),
]

export default allUsersHandler
