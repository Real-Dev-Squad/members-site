import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { LINKS } from "../../../../constants/AppConstants";
import dummyImage from "../../../../../public/images/Avatar.png";
import downArrow from "../../../../../public/icons/icons8-arrow.png";

import styles from "./userProfile.module.css";

export function UserProfileWithGitHubLogin({
  isLoggedIn,
  isDropdownVisible,
  firstName,
  imageURL,
  setIsDropdownVisible,
}: {
  isLoggedIn: boolean;
  isDropdownVisible: boolean;
  firstName: string | null;
  imageURL: string | null;
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const altText: string = firstName ?? "user image";
  const imageToShow = imageURL || dummyImage;

  return (
    <>
      {isLoggedIn ? (
        <Box
          data-testid="userProfile"
          className={styles.userprofile_container}
          onClick={() => setIsDropdownVisible((prevState) => !prevState)}
        >
          <Text
            className={styles.userprofile_user__first_name}
          >{`Hello, ${firstName}`}</Text>
          <Box className={styles.userprofile_image__wrapper}>
            <Image
              className={styles.userProfile_user__image}
              src={imageToShow}
              width={32}
              height={32}
              alt={altText}
            />
            <Image width={15} height={15} src={downArrow} alt="downArrow" />
          </Box>
        </Box>
      ) : (
        <Link href={LINKS.AUTH_URL}>
          <Button className={styles.userProfile_github__button}>
            <Text>Sign in with github</Text>
            <Image
              src="/icons/Github_Logo.svg"
              width={20}
              height={20}
              alt="git"
            />
          </Button>
        </Link>
      )}
    </>
  );
}
