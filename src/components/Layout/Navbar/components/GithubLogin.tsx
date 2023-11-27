import { getAuthUrl } from '@/src/utils/auth';
import { Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function GithubLogin() {
  const authURL = getAuthUrl();
  return (
    <Link href={authURL}>
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
        <Image src="/icons/Github_Logo.svg" width={20} height={20} alt="git" />
      </Button>
    </Link>
  );
}
