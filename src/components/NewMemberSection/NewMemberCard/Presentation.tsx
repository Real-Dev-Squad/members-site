import { Avatar, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import SettingButton from '../../SettingButton/SettingButton';

export default function NewMemberCardPresentation({
  username,
  displayPic,
  shouldShowSetting,
  openRoleUpdateModal,
  openSkillUpdateModal,
  showSetting,
  hideSetting
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
  const nameToShow = username || 'undefined';
  return (
    <Box
      as='button'
      onMouseEnter={() => {
        console.log('coming here!')
        showSetting()
      }}
      onMouseLeave={hideSetting}
      sx={{
        display: 'grid',
        placeItems: 'center',
        background: 'white',
        maxWidth: '270px',
        borderRadius: '5%',
        transition: '0.38s box-shadow ease-out',
        cursor: 'none',
        flex: '0 150px',
        height: '160px',
        overflow: 'hidden',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 10px',
          background: 'white',
          maxWidth: '270px',
          borderRadius: '5%',
          transition: '0.38s box-shadow ease-out',
          cursor: 'default',
          flex: '0 150px',
          height: '160px',
          overflow: 'hidden',
          border: '0',
          boxShadow: 'none',
          alignItems: 'center',
        }}
      >
        <Image
          src={imageToShow}
          width={50}
          height={50}
          style={{ borderRadius: '50px', flexShrink: 0 }}
          alt=''
        />
        <Text>{nameToShow}</Text>
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
