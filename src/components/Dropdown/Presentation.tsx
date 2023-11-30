import { ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import styles from "./dropdown.module.css";
import { dropdownLinksType } from "./types/dropdownLinks";
import React from "react";

export function DropdownPresentation({
  dropdownLinks,
  setIsDropdownVisible,
}: {
  dropdownLinks: dropdownLinksType[];
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const dropdownItems = dropdownLinks.map((item) => {
    return (
      <React.Fragment key={item.id}>
        {typeof item.label !== "string" ? (
          <>
            <hr className={styles.line} />
            {<item.label />}
          </>
        ) : (
          <ListItem className={styles.dropdown_items}>
            <Link href={item.link} className={styles.dropdown_links}>
              {item.label}
            </Link>
          </ListItem>
        )}
      </React.Fragment>
    );
  });

  return (
    <div
      data-testid="dropdown"
      className={styles.dropdown_wrapper}
      onClick={() => setIsDropdownVisible(false)}
    >
      <UnorderedList listStyleType="none" className={styles.dropdown_menu}>
        {dropdownItems}
      </UnorderedList>
    </div>
  );
}
