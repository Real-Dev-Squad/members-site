import { rest } from 'msw'
import { skillsData } from '../db/skills'
const URL = process.env.NEXT_PUBLIC_BASE_URL

const username = 'KTkF4vAd6tsuBw84oZXt'

const skillsHandler = [
  rest.get(`${URL}/users/${username}/skills`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Skills returned successfully',
        skills: skillsData,
      }),
    )
  }),
]

export default skillsHandler
