import { dropdownLinksType } from "./types/dropdownLinks";

export const DROPDOWN_LINKS: Array<dropdownLinksType> = [
    {
        id: 0,
        name: "Home",
        link: "https://www.realdevsquad.com"
    },
    {
        id: 1,
        name: "Status",
        link: "https://my.realdevsquad.com/profile"
    },
    {
        id: 2,
        name: "Profile",
        link: "https://my.realdevsquad.com/profile"
    },
    {
        id: 3,
        name: "Tasks",
        link: "https://my.realdevsquad.com/tasks"
    },
    {
        id: 4,
        name: "Identity",
        link: "https://my.realdevsquad.com/identity"
    }
]

export const LOGOUT_API = "https://api.realdevsquad.com/auth/signout";
