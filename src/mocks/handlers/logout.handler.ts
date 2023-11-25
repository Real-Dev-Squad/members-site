import { rest } from "msw";
import { LOGOUT_API } from "../../components/Dropdown/DropdownConstants";


const logoutHandler = [
    rest.get(`${LOGOUT_API}`, (_, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: 'Signout successful',
            })
        )
    })
];

export default logoutHandler;
