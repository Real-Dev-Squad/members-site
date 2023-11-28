import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { LINKS } from "../../../../constants/AppConstants";
import dummyImage from "../../../../../public/images/Avatar.png";

import styles from "./userProfile.module.css";

export function UserProfileWithGitHubLogin({
  isLoggedIn,
  isDropdownVisible,
  first_name,
  imageURL,
  setIsDropdownVisible,
}: {
  isLoggedIn: boolean;
  isDropdownVisible: boolean;
  first_name: string | null;
  imageURL: string | null;
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const altText: string = first_name !== null ? first_name : "user image";
  const imageToShow = imageURL || dummyImage;

  return (
    <>
      {isLoggedIn ? (
        <Box
          data-testid="userProfile"
          className={styles.userprofile_container}
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        >
          <Text
            className={styles.userprofile_user__first_name}
          >{`Hello, ${first_name}`}</Text>
          <Image
            src={imageToShow}
            style={{ borderRadius: "50%" }}
            width={32}
            height={32}
            alt={altText}
          />
        </Box>
      ) : (
        <Link href={LINKS.AUTH_URL}>
          <Button
            sx={{
              padding: "10px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              border: "2px solid white",
            }}
          >
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
