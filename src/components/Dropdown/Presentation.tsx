import { Button, ListItem, UnorderedList } from "@chakra-ui/react";

import { Dispatch, SetStateAction } from "react";

import styles from "./dropdown.module.css";
import { DROPDOWN_LINKS, LOGOUT_API } from "./DropdownConstants";
import Link from "next/link";
import { setIsLoggedOut } from "@/src/store/global";
import { useDispatch } from "react-redux";

export default function Dropdown({ setIsDropdownVisible } : {
    setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
    const reduxDispatch = useDispatch();

    const dropdownItems = DROPDOWN_LINKS.map((link) => {
        return (
            <ListItem key={link.id} className={styles.dropdown_items}>
                <Link href={link.link} className={styles.dropdown_links}>
                    {link.name}
                </Link>
            </ListItem>
        )
    })

    const logout = () => {
        fetch(LOGOUT_API, {
            method: 'GET',
            credentials: 'include',
        }).then(() => {
            location.reload();
            reduxDispatch(setIsLoggedOut({isLoggedIn: false}))
        });
    }

    return (
        <div className={styles.dropdown_wrapper} onClick={() => setIsDropdownVisible(false)}>
            <UnorderedList listStyleType="none" className={styles.dropdown_menu}>
                {dropdownItems}
                <hr className={styles.line}/>
                <ListItem className={styles.dropdown_items}>
                    <Button onClick={logout} className={styles.signout_button}>Sign out</Button>
                </ListItem>
            </UnorderedList>
        </div>
    )
}
