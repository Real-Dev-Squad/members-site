import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

import { Dispatch, SetStateAction } from "react";

import styles from "./userProfile.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";

export default function UserProfile({ isDropdownVisible, setIsDropdownVisible} : {
  isDropdownVisible: boolean;
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const { first_name, imageURL } = useSelector((state: RootState) => state.global);
  const imageToShow = imageURL || '/images/Avatar.png';

  return (
      <Box
        className={styles.userprofile_container}
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <Text
          className={styles.userprofile_user__first_name}
        >{`Hello, ${first_name}`}</Text>
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
