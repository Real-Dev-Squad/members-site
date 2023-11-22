import { Button, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";

import styles from "./dropdown.module.css";
import { dropdownLinksType } from "./types/dropdownLinks";


export function DropdownPresentation({ logout, dropdownLinks } : {
    logout: () => void;
    dropdownLinks: dropdownLinksType[]
}) {

    const dropdownItems = dropdownLinks.map((link) => {
        return (
        <ListItem key={link.id} className={styles.dropdown_items}>
            <Link href={link.link} className={styles.dropdown_links}>
                {link.name}
            </Link>
        </ListItem>
        )
    })

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
