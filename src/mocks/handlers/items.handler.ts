import { rest } from "msw";
import { skillsData } from "../db/skills";
const URL = process.env.NEXT_PUBLIC_BASE_URL;

export const itemsHandler = [
    rest.post(`${URL}/items`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '',
                skills: skillsData[0]
            })
        )
    }),
    rest.delete(`${URL}/items`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '',
                skills: skillsData
            })
        )
    })
]