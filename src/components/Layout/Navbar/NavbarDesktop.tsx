import { Box, Button, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { NAV_LINKS } from './NavbarConstant';
import Link from 'next/link';
import { LINKS } from '@/src/constants/AppConstants';
import { useGetSelfDetailsQuery } from '@/src/services/serverApi';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/store';

export default function NavbarDesktop() {
  const { isLoggedIn } = useSelector((state: RootState) => state.global);
  let profileComponent;

  if (isLoggedIn) profileComponent = <UserProfile />;
  else profileComponent = <GithubLogin />;

  const navItems = NAV_LINKS.map((link) => (
    <ListItem
      key={link.id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        margin: '2px',
      }}
    >
      <Link href={link.link}>
        <Text
          sx={{
            fontWeight: 700,
            fontSize: '16px',
            '&:hover': {
              color: '#49a82e',
            },
          }}
        >
          {link.name}
        </Text>
      </Link>
    </ListItem>
  ));

  return (
    <UnorderedList
      listStyleType='none'
      sx={{
        color: 'white',
        background: '#1d1283',
        display: 'flex',
        padding: '20px',
        margin: 0,
        gap: '20px',
        alignItems: 'center',
      }}
    >
      <ListItem>
        <Image
          src='/images/Real-Dev-Squad@1x.svg'
          width={50}
          height={50}
          alt='RDS logo'
        />
      </ListItem>
      {navItems}
      <ListItem
        sx={{
          marginLeft: 'auto',
        }}
      >
        {profileComponent}
      </ListItem>
    </UnorderedList>
  );
}

function GithubLogin() {
  return (
    <Link href={LINKS.AUTH_URL}>
      <Button
        sx={{
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          border: '2px solid white',
        }}
      >
        <Text>Sign in with github</Text>
        <Image src='/icons/Github_Logo.svg' width={20} height={20} alt='git' />
      </Button>
    </Link>
  );
}

function UserProfile() {
  const { data: user, isLoading } = useGetSelfDetailsQuery();
  const imageToShow = user?.picture.url || '/images/Avatar.png';

  if (isLoading) return <></>;
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
      }}
    >
      <Text
        sx={{ fontSize: '16px', fontWeight: 700 }}
      >{`Hello, ${user?.first_name}`}</Text>
      <Image
        src={imageToShow}
        style={{ borderRadius: '50%' }}
        width={40}
        height={40}
        alt=''
      />
    </Box>
  );
}
