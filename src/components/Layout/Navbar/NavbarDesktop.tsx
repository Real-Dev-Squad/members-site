import { Box, Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import { NAV_LINKS } from "./NavbarConstant";
import Link from "next/link";
import { LINKS } from "@/src/constants/AppConstants";
import { useGetSelfDetailsQuery } from "@/src/services/serverApi";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import UserProfile from "./components/UserProfile";
import GithubLogin from "./components/GithubLogin";

import styles from './navbar.module.css'

export default function NavbarDesktop() {
  const { isLoggedIn } = useSelector((state: RootState) => state.global);
  let profileComponent;

  if (isLoggedIn) profileComponent = <UserProfile />;
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
          sx={{
            fontWeight: 700,
            fontSize: "16px",
            "&:hover": {
              color: "#49a82e",
            },
          }}
        >
          {link.name}
        </Text>
      </Link>
    </ListItem>
  ));

  return (
   <nav className={styles.navbar}>
     <UnorderedList
      listStyleType="none"
      sx={{
        color: "white",
        background: "#1d1283",
        display: "flex",
        padding: "20px",
        margin: 0,
        gap: "20px",
        alignItems: "center",
      }}
    >
      <ListItem>
        <Image
          src="/images/Real-Dev-Squad@1x.svg"
          width={50}
          height={50}
          alt="RDS logo"
        />
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
