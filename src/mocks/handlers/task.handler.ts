import { rest } from "msw";
const URL = process.env.NEXT_PUBLIC_BASE_URL;

const taskId = "007ql3W886LKPqXSf1Jn"

const taskHandler = [
    rest.patch(`${URL}/tasks/${taskId}`, (req, res, ctx) => {
        return res(
            ctx.status(204),
            ctx.json({
                message: "task updated!"
            })
        )
    })
];

export default taskHandler;