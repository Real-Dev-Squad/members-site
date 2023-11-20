import { Button, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "@/src/store/global";

import { DROPDOWN_LINKS, LOGOUT_API } from "./DropdownConstants";

import styles from "./dropdown.module.css";

export function Dropdown() {
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
            reduxDispatch(setIsLoggedIn({isLoggedIn: false}))
        });
    }

    return (
        <UnorderedList listStyleType="none" className={styles.dropdown_menu}>
            {dropdownItems}
            <hr className={styles.line}/>
            <ListItem className={styles.dropdown_items}>
                <Button onClick={logout} className={styles.signout_button}>Sign out</Button>
            </ListItem>
        </UnorderedList>
    )
}
