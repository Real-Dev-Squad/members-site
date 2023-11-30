import { Box, Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import { NAV_LINKS } from "./NavbarConstant";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { UserProfileWithGitHubLogin } from "./components/UserProfileWithGitHubLogin";

import styles from "./navbar.module.css";

export default function NavbarMobile({
  isLoggedIn,
  firstName,
  imageURL,
  isDropdownVisible,
  setIsDropdownVisible,
}: {
  isLoggedIn: boolean;
  isDropdownVisible: boolean;
  firstName: string | null;
  imageURL: string | null;
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const [navLinksVisibility, setNavLinksVisibility] = useState(false);

  const navItems = NAV_LINKS.map((link) => (
    <ListItem key={link.id} className={styles.navbarMobile_items}>
      <Link href={link.link}>
        <Text className={styles.navbarMobile_navlinks}>{link.name}</Text>
      </Link>
    </ListItem>
  ));

  return (
    <>
      <Box className={styles.navbarMobile_container} data-testId="navbarMobile">
        <Button
          data-testId="hamburger"
          onClick={() => setNavLinksVisibility((prev) => !prev)}
        >
          <Image src="/icons/hamburgerIcon.svg" width={30} height={30} alt="" />
        </Button>
        <Box sx={{ marginLeft: "auto" }}>
          <UserProfileWithGitHubLogin
            isLoggedIn={isLoggedIn}
            firstName={firstName}
            imageURL={imageURL}
            isDropdownVisible={isDropdownVisible}
            setIsDropdownVisible={setIsDropdownVisible}
          />
        </Box>
      </Box>
      {navLinksVisibility && (
        <UnorderedList
          data-testId="linksContainer"
          listStyleType="none"
          className={styles.navbarMobile_menu}
        >
          {navItems}
        </UnorderedList>
      )}
    </>
  );
}
