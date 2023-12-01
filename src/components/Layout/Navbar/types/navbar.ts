import { Dispatch, SetStateAction } from "react";

export type NavbarTypes = {
    isLoggedIn: boolean;
    isDropdownVisible: boolean;
    firstName: string | null;
    imageURL: string | null;
    setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}