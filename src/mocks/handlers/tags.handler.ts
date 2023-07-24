import { rest } from "msw";
import { tagsData } from "../db/tags";
const URL = process.env.NEXT_PUBLIC_BASE_URL;

const tagsHandler = [
    rest.get(`${URL}/tags`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: 'Tags returned successfully',
                tags: tagsData
            })
        )
    })
];

export default tagsHandler;