import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "@/src/store/global";

import { DropdownPresentation } from "./Dropdown";

import { DROPDOWN_LINKS, LOGOUT_API } from "./DropdownConstants";

import styles from "./dropdown.module.css";

export default function Dropdown({ setIsDropdownVisible } : {
    setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
    const reduxDispatch = useDispatch();

    const logout = () => {
        fetch(LOGOUT_API, {
            method: 'GET',
            credentials: 'include',
        }).then(() => {
            reduxDispatch(setIsLoggedIn({isLoggedIn: false}));
        });
    }

    return (
        <div className={styles.dropdown_wrapper} onClick={() => setIsDropdownVisible(false)}>
            <DropdownPresentation logout={logout} dropdownLinks={DROPDOWN_LINKS} />
        </div>
    )
}
