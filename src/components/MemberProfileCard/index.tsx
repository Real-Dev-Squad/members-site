import React from 'react';
import NextImage from 'next/image';
import { Avatar, Box, Button, Flex, IconButton, Text } from '@chakra-ui/react';

import LINKEDIN_ICON from './assets/linkedin_icon.svg';
import TWITTER_ICON from './assets/twitter_icon.svg';
import INSTAGRAM_ICON from './assets/instagram_icon.svg';
import GITHUB_ICON from './assets/github_icon.svg';

import styles from './memberprofile.module.css';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/src/store';
import { setIsUserRoleUpdateModalVisible, setUserSkillModalVisibility } from '@/src/store/superUserOptions';
import SettingButton from '../SettingButton/SettingButton';

/**
 *
 * @returns a JSX component of member detail on members profile page
 */
export default function Index({ userData }: { userData: any }) {
  const { isOptionKeyPressed } = useSelector(
    (state: RootState) => state.keyboard
  );
  const reduxDispatch = useDispatch();

  function openUserRoleUpdateModal() {
    reduxDispatch(
      setIsUserRoleUpdateModalVisible({
        visibility: true,
        username: userData?.username,
        isUserMember: false,
      })
    );
  }

  function openSkillUpdateModal() {
    reduxDispatch(
      setUserSkillModalVisibility({ visibility: true, userId: userData.username })
    );
  }

  return (
    <Box position='sticky' className={styles.memberProfile_container}>
      <Avatar
        name={userData?.username}
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
      <Flex gap={'1rem'}>
        <NextImage height={'30'} src={TWITTER_ICON} alt='twitter image' />
        <NextImage
          height={'32'}
          src={INSTAGRAM_ICON}
          alt='twitter image'
          style={{ objectFit: 'contain' }}
        />
        <NextImage height={'32'} src={LINKEDIN_ICON} alt='linkedin image' />
        <NextImage height={'38'} src={GITHUB_ICON} alt='github image' />
      </Flex>
      {isOptionKeyPressed && (
        <Flex gap={'5px'} alignItems='center' marginTop={2}>
          <Image src='/icons/info_icon.svg' width={18} height={18} alt='' />
          <Text className={styles.status_text}>User is a member</Text>
          <Box className={styles.setting_button_container}>
            <SettingButton
              openRoleUpdateModal={openUserRoleUpdateModal}
              openSkillUpdateModal={openSkillUpdateModal}
            />
          </Box>
        </Flex>
      )}
    </Box>
  );
}
