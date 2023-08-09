import { rest } from "msw";
import { membersData } from "../db/members";
const URL = process.env.NEXT_PUBLIC_BASE_URL;

const membersHandler = [
    rest.get(`${URL}/members`, (_, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: 'Members returned successfully!',
                members: membersData
            })
        )
    })
];

export default membersHandler;