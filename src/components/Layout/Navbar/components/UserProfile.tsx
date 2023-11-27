import { useGetSelfDetailsQuery } from "../../../../services/serverApi";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

import { Dispatch, SetStateAction } from "react";

import styles from "./userProfile.module.css";

export default function UserProfile({ isDropdownVisible, setIsDropdownVisible} : {
  isDropdownVisible: boolean;
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const { data: user, isLoading } = useGetSelfDetailsQuery();
  const imageToShow = user?.picture?.url || '/images/Avatar.png';
  console.log("im ladoingggg", isLoading)
  console.log("data", user)

  //if (isLoading) return <p>Heloo im loadinnggggg</p>;
  return (
      <Box
        data-testId="userProfile"
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
