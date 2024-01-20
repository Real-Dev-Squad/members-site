import Link from 'next/link';
import { Box, Button, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { FC, useState } from 'react';

import { NAV_LINKS } from './NavbarConstant';
import { NavbarTypes } from './types/navbar';

import { UserProfileWithGitHubLogin } from './components/UserProfileWithGitHubLogin';

import styles from './navbar.module.css';

const NavbarMobile: FC<NavbarTypes> = ({
  isLoggedIn,
  firstName,
  imageURL,
  setIsDropdownVisible,
}) => {
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
          <Image
            src="/icons/hamburgerIcon.svg"
            width={30}
            height={30}
            alt="hamburger"
          />
        </Button>
        <Box className={styles.navbarMobile_userprofile__wrapper}>
          <UserProfileWithGitHubLogin
            isLoggedIn={isLoggedIn}
            firstName={firstName}
            imageURL={imageURL}
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
};

export default NavbarMobile;
