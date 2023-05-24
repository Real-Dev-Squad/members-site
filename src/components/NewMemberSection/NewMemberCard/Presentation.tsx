import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import SettingButton from '../../SettingButton/SettingButton';

import styles from './newMemberCard.module.css';

export default function NewMemberCardPresentation({
  username,
  displayPic,
  shouldShowSetting,
  openRoleUpdateModal,
  openSkillUpdateModal,
  showSetting,
  hideSetting,
}: {
  username: string;
  displayPic: string;
  shouldShowSetting: boolean;
  openRoleUpdateModal: () => void;
  openSkillUpdateModal: () => void;
  hideSetting: () => void;
  showSetting: () => void;
}) {
  const imageToShow = displayPic || '/images/Avatar.png';
  return (
    <Box
      as='button'
      onMouseEnter={showSetting}
      onMouseLeave={hideSetting}
      className={styles['new_user_container']}
    >
      <Box className={styles['new_user_main']}>
        <Box className={styles['new_user__image_container']}>
          <Image
            style={{ borderRadius: '50%' }}
            src={imageToShow}
            fill
            alt=''
          />
        </Box>
        <Text>{username}</Text>
      </Box>
      {shouldShowSetting && (
        <SettingButton
          openRoleUpdateModal={openRoleUpdateModal}
          openSkillUpdateModal={openSkillUpdateModal}
        />
      )}
    </Box>
  );
}
