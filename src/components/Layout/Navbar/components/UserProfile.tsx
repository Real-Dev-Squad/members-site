import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useGetSelfDetailsQuery } from "@/src/services/serverApi";

import { Dispatch, SetStateAction, useState } from "react";

import Dropdown from "@/src/components/Dropdown/Presentation";

export default function UserProfile({ isDropdownVisible, setIsDropdownVisible} : {
  isDropdownVisible: boolean;
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const { data: user, isLoading } = useGetSelfDetailsQuery();
  const imageToShow = user?.picture?.url || '/images/Avatar.png';

  if (isLoading) return <></>;
  return (
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          cursor: "pointer"
        }}
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <Text
          sx={{ fontSize: '16px', fontWeight: 700 }}
        >{`Hello, ${user?.first_name}`}</Text>
        <Image
          src={imageToShow}
          style={{ borderRadius: '50%' }}
          width={32}
          height={32}
          alt=''
        />
      </Box>
  );
}
