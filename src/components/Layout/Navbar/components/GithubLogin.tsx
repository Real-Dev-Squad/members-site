import { LINKS } from "../../../../constants/AppConstants";
import { Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function GithubLogin() {
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