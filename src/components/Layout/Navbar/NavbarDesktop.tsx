import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { HOME_URL, NAV_LINKS } from "./NavbarConstant";
import Link from "next/link";

import { UserProfileWithGitHubLogin } from "./components/UserProfileWithGitHubLogin";

import styles from "./navbar.module.css";

export default function NavbarDesktop({
  isLoggedIn,
  isDropdownVisible,
  firstName,
  imageURL,
  setIsDropdownVisible,
}: {
  isLoggedIn: boolean;
  isDropdownVisible: boolean;
  firstName: string | null;
  imageURL: string | null;
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const navItems = NAV_LINKS.map((link) => (
    <ListItem key={link.id} className={styles.navlist_items}>
      <Link href={link.link}>
        <Text className={styles.navlinks}>{link.name}</Text>
      </Link>
    </ListItem>
  ));

  return (
    <nav className={styles.navbar} data-testId="navbarDesktop">
      <UnorderedList listStyleType="none" className={styles.navbar_menu}>
        <ListItem>
          <Link href={HOME_URL}>
            <Image
              src="/images/Real-Dev-Squad@1x.svg"
              width={45}
              height={45}
              alt="RDS logo"
            />
          </Link>
        </ListItem>
        {navItems}
        <ListItem
          sx={{
            marginLeft: "auto",
          }}
        >
          <UserProfileWithGitHubLogin
            isLoggedIn={isLoggedIn}
            isDropdownVisible={isDropdownVisible}
            firstName={firstName}
            imageURL={imageURL}
            setIsDropdownVisible={setIsDropdownVisible}
          />
        </ListItem>
      </UnorderedList>
    </nav>
  );
}
