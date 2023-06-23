import { useGetSelfDetailsQuery } from "@/src/services/serverApi";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function UserProfile() {
  const { data: user, isLoading } = useGetSelfDetailsQuery();
  const imageToShow = user?.picture?.url || '/images/Avatar.png';

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
