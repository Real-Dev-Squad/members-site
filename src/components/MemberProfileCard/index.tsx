import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import styles from './memberprofile.module.css';
import Socials from '../MembersSectionNew/components/Socials';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/src/store';
import {
  setIsUserRoleUpdateModalVisible,
  setUserSkillModalVisibility,
} from '@/src/store/superUserOptions';
import Image from 'next/image';
import SettingButton from '../SettingButton/SettingButton';
import { useGetIsSuperUser } from '@/src/utils/customHooks';

/**
 *
 * @returns a JSX component of member detail on members profile page
 */
export default function Index({ userData }: { userData: any }) {
  const { isOptionKeyPressed } = useSelector(
    (state: RootState) => state.keyboard
  );
  const isSuperUser = useGetIsSuperUser();
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
      setUserSkillModalVisibility({
        visibility: true,
        userId: userData.username,
      })
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
      <Box className={styles.memberProfile_userDetail}>
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
        {userData?.twitter_id && (
          <Socials
            url={`https://twitter.com/${userData.twitter_id}`}
            icon='/icons/icons8-twitter.svg'
            alt='twitter icon'
          />
        )}
        {userData.github_id && (
          <Socials
            url={`https://github.com/${userData.github_id}`}
            icon='/icons/icons8-github.svg'
            alt='github icon'
          />
        )}
        {userData.linkedin_id && (
          <Socials
            url={`https://linkedin.com/in/${userData.linkedin_id}`}
            icon='/icons/icons8-linkedin.svg'
            alt='linkedin icon'
          />
        )}
        {userData.instagram_id && (
          <Socials
            url={`https://instagram.com/${userData.instagram_id}`}
            icon='/icons/icons8-instagram.svg'
            alt='instagram icon'
          />
        )}
      </Flex>
      {isOptionKeyPressed && isSuperUser && (
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
