import { UserLogout } from "./components/UserLogout";
import { dropdownLinksType } from "./types/dropdownLinks";

export const DROPDOWN_LINKS: Array<dropdownLinksType> = [
    {
        id: 0,
        label: "Home",
        link: "https://www.realdevsquad.com"
    },
    {
        id: 1,
        label: "Status",
        link: "https://my.realdevsquad.com"
    },
    {
        id: 2,
        label: "Profile",
        link: "https://my.realdevsquad.com/profile"
    },
    {
        id: 3,
        label: "Tasks",
        link: "https://my.realdevsquad.com/tasks"
    },
    {
        id: 4,
        label: "Identity",
        link: "https://my.realdevsquad.com/identity"
    },
    {
        id: 5,
        label: UserLogout,
        link: "https://api.realdevsquad.com/auth/signout",
    }
]

export const LOGOUT_API = "https://api.realdevsquad.com/auth/signout";
