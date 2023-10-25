import { rest } from "msw";
import { allUsersData } from "../db/allUsersData";
const URL = process.env.NEXT_PUBLIC_BASE_URL;

const username = 'vinayak';

const usersHandler = [
    rest.get(`${URL}/users`, (_, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: 'Users returned successfully!',
                users: allUsersData
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

export default usersHandler;