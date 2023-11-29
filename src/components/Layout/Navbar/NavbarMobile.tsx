import { Box, Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import { NAV_LINKS } from "./NavbarConstant";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { UserProfileWithGitHubLogin } from "./components/UserProfileWithGitHubLogin";

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
    <ListItem
      key={link.id}
      sx={{
        padding: "10px 20px",
      }}
    >
      <Link href={link.link}>
        <Text
          sx={{
            color: "#1d1283",
            fontWeight: 600,
            "&:hover": { color: "#49a82e" },
          }}
        >
          {link.name}
        </Text>
      </Link>
    </ListItem>
  ));

  return (
    <>
      <Box
        sx={{
          color: "white",
          background: "#1d1283",
          display: "flex",
          padding: "20px",
          margin: 0,
          alignItems: "center",
        }}
        data-testId="navbarMobile"
      >
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
          sx={{
            background: "white",
            padding: "20px",
            boxShadow: "0 10px 15px rgba(0,0,0,.5)",
            width: "100%",
            margin: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navItems}
        </UnorderedList>
      )}
    </>
  );
}
