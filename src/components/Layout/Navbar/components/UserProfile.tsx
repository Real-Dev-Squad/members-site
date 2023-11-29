import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { Dispatch, SetStateAction } from "react";

import dummyImage from "../../../../../public/images/Avatar.png";

import styles from "./userProfile.module.css";

export default function UserProfile({
  isDropdownVisible,
  setIsDropdownVisible,
}: {
  isDropdownVisible: boolean;
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const { firstName, imageURL } = useSelector(
    (state: RootState) => state.global
  );

  const altText: string = firstName !== null ? firstName : "user image";

  const imageToShow = imageURL || dummyImage;

  return (
    <Box
      className={styles.userprofile_container}
      onClick={() => setIsDropdownVisible(!isDropdownVisible)}
    >
      <Text
        className={styles.userprofile_user__first_name}
      >{`Hello, ${firstName}`}</Text>
      <Image
        src={imageToShow}
        style={{ borderRadius: "50%" }}
        width={32}
        height={32}
        alt={altText}
      />
    </Box>
  );
}
