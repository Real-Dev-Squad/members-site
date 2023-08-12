import { rest } from "msw";
import { membersData } from "../db/members";
const URL = process.env.NEXT_PUBLIC_BASE_URL;

const username = 'vinayak';

const membersHandler = [
    rest.get(`${URL}/members`, (_, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: 'Members returned successfully!',
                members: membersData
            })
        )
    }),
    rest.patch(`${URL}/members/moveToMembers/${username}`, (req, res, ctx) => {
        return res(
            ctx.status(204),
        )
    }),
    rest.patch(`${URL}/members/archiveMembers/${username}`, (req, res, ctx) => {
        return res(
            ctx.status(204)
        )
    })
];

export default membersHandler;