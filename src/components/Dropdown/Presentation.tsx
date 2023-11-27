import { ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

import styles from "./dropdown.module.css";
import { dropdownLinksType } from "./types/dropdownLinks";
import { UserLogout } from "./components/UserLogout";

export function DropdownPresentation({
  dropdownLinks,
  setIsDropdownVisible,
}: {
  dropdownLinks: dropdownLinksType[];
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const dropdownItems = dropdownLinks.map((link) => {
    return (
      <React.Fragment key={link.id}>
        {typeof link.label !== "string" ? (
          <>
            <hr className={styles.line} />
            {link.label()}
          </>
        ) : (
          <ListItem className={styles.dropdown_items}>
            <Link href={link.link} className={styles.dropdown_links}>
              {link.label}
            </Link>
          </ListItem>
        )}
      </React.Fragment>
    );
  });

  return (
    <div
      className={styles.dropdown_wrapper}
      onClick={() => setIsDropdownVisible(false)}
    >
      <UnorderedList
        data-testId="dropdown"
        listStyleType="none"
        className={styles.dropdown_menu}
      >
        {dropdownItems}
      </UnorderedList>
    </div>
  );
}
