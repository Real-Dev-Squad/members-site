import React from "react";
import NextImage from "next/image";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

import LINKEDIN_ICON from "./assets/linkedin_icon.svg";
import TWITTER_ICON from "./assets/twitter_icon.svg";
import INSTAGRAM_ICON from "./assets/instagram_icon.svg";
import GITHUB_ICON from "./assets/github_icon.svg";

import styles from "./memberprofile.module.css";

/**
 *
 * @returns a JSX component of member detail on members profile page
 */
export default function index({ userData }: { userData: any }) {
  console.log(userData,"userData")
  return (
    <Box position="sticky" className={styles.memberProfile_container}>
      <Avatar
        name={userData?.username}
        src={userData?.picture?.url}
        sx={{
          height: "180px",
          width: "180px",
        }}
        objectFit="contain"
      />
      <Box>
        <h1
          className={styles.memberProfile_name}
        >{`${userData?.first_name} ${userData?.last_name}`}</h1>
        <Text className={styles.memberProfile_username}>
          @{userData?.username}
        </Text>
      </Box>
      <Box className={styles.memberProfile_userDetail}>
        <Text>{userData?.designation}</Text>
        <Text className={styles.memberProfile_userCompany}>
          {userData?.company_name}
        </Text>
      </Box>
      <Flex justifyContent={"space-around"}>
        <NextImage height={"30"} src={TWITTER_ICON} alt="twitter image" />
        <NextImage
          height={"32"}
          src={INSTAGRAM_ICON}
          alt="twitter image"
          style={{ objectFit: "contain" }}
        />
        <NextImage height={"32"} src={LINKEDIN_ICON} alt="linkedin image" />
        <NextImage height={"38"} src={GITHUB_ICON} alt="github image" />
      </Flex>
    </Box>
  );
}
