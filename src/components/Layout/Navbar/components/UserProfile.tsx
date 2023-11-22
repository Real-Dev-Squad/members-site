import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useGetSelfDetailsQuery } from "@/src/services/serverApi";

import { Dispatch, SetStateAction } from "react";

import styles from "./userProfile.module.css";

export default function UserProfile({ isDropdownVisible, setIsDropdownVisible} : {
  isDropdownVisible: boolean;
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const { data: user, isLoading } = useGetSelfDetailsQuery();
  const imageToShow = user?.picture?.url || '/images/Avatar.png';

  if (isLoading) return <></>;
  return (
      <Box
        className={styles.userprofile_container}
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <Text
          className={styles.userprofile_user__first_name}
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
