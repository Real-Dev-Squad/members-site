import { RootState } from '@/src/store';
import { Box, Button, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';
import GithubLogin from './components/GithubLogin';
import { NAV_LINKS } from './NavbarConstant';
import Link from 'next/link';
import { useState } from 'react';

export default function NavbarMobile() {
  const [navLinksVisibility, setNavLinksVisibility] = useState(false)
  const { isLoggedIn } = useSelector((state: RootState) => state.global);
  let profileComponent;

  if (isLoggedIn) profileComponent = <UserProfile />;
  else profileComponent = <GithubLogin />;

  const navItems = NAV_LINKS.map((link) => (
    <ListItem
      key={link.id}
      sx={{
        padding: '10px 20px',
      }}
    >
      <Link href={link.link}>
        <Text
          sx={{
            color: '#1d1283',
            fontWeight: 600,
            '&:hover': { color: '#49a82e' },
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
          color: 'white',
          background: '#1d1283',
          display: 'flex',
          padding: '20px',
          margin: 0,
          alignItems: 'center',
        }}
      >
        <Button onClick={() => setNavLinksVisibility((prev) => !prev)}>
          <Image src='/icons/hamburgerIcon.svg' width={30} height={30} alt='' />
        </Button>
        <Box sx={{ marginLeft: 'auto' }}>{profileComponent}</Box>
      </Box>
      {navLinksVisibility && (
        <UnorderedList
          listStyleType='none'
          sx={{
            background: 'white',
            padding: '20px',
            boxShadow: '0 10px 15px rgba(0,0,0,.5)',
            width: '100%',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {navItems}
        </UnorderedList>
      )}
    </>
  );
}
