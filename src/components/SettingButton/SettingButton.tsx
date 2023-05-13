import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Image from 'next/image';

export default function SettingButton({
  openRoleUpdateModal,
  openSkillUpdateModal,
}: {
  openRoleUpdateModal: () => void;
  openSkillUpdateModal: () => void;
}) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        position='absolute'
        top='0'
        right='0'
        background='none'
        _hover={{ bg: 'none' }}
      >
        <Image src='/icons/setting.svg' alt='' width={20} height={20} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={openRoleUpdateModal}>Update user role</MenuItem>
        <MenuItem onClick={openSkillUpdateModal}>Add/remove skills</MenuItem>
      </MenuList>
    </Menu>
  );
}
