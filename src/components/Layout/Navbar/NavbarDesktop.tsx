import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { HOME_URL, NAV_LINKS } from "./NavbarConstant";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import UserProfile from "./components/UserProfile";
import GithubLogin from "./components/GithubLogin";

import styles from './navbar.module.css'

export default function NavbarDesktop({ isDropdownVisible, setIsDropdownVisible } : {
  isDropdownVisible: boolean;
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const { isLoggedIn } = useSelector((state: RootState) => state.global);
  let profileComponent;

  if (isLoggedIn) profileComponent = <UserProfile isDropdownVisible={isDropdownVisible} setIsDropdownVisible={setIsDropdownVisible} />;
  else profileComponent = <GithubLogin />;

  const navItems = NAV_LINKS.map((link) => (
    <ListItem
      key={link.id}
      flex={"flex"}
      alignItems={"center"}
      margin={"2px"}
    >
      <Link href={link.link}>
        <Text
          className={styles.navlinks}
        >
          {link.name}
        </Text>
      </Link>
    </ListItem>
  ));

  return (
   <nav className={styles.navbar} data-testId="navbarDesktop">
     <UnorderedList
      listStyleType="none"
      className={styles.navbar_menu}
    >
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
        {profileComponent}
      </ListItem>
    </UnorderedList>
   </nav>
  );
}
