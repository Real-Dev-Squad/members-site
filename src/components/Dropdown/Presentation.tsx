import { Button, ListItem, UnorderedList } from "@chakra-ui/react";

import { Dispatch, SetStateAction } from "react";

import styles from "./dropdown.module.css";
import { DROPDOWN_LINKS, LOGOUT_URL } from "./DropdownConstants";
import Link from "next/link";

export default function Dropdown({ setIsDropdownVisible } : {
    setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
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
        fetch(LOGOUT_URL, {
            method: 'GET',
            credentials: 'include',
        }).then(() => {
            location.reload();
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