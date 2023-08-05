import React from 'react';
import { Avatar, Box, Text } from '@chakra-ui/react';
import styles from './memberprofile.module.css';

/**
 *
 * @returns a JSX component of member detail on members profile page
 */
export default function index({ userData }: { userData: any }) {
  return (
    <Box position='sticky' className={styles.memberProfile_container}>
      <Avatar
        name='Ankush'
        src={userData?.picture?.url}
        sx={{
          height: '180px',
          width: '180px',
        }}
        objectFit='contain'
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
<<<<<<< Updated upstream
=======
      <Flex gap={"1rem"}>
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
>>>>>>> Stashed changes
    </Box>
  );
}
