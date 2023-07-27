import { rest } from "msw";
import { levelsData } from "../db/levels";
const URL = process.env.NEXT_PUBLIC_BASE_URL;

const levelsHandler = [
    rest.get(`${URL}/levels`, (_, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: 'Levels returned Successfully',
                levels: levelsData
            })
        )
    })
];

export default levelsHandler;