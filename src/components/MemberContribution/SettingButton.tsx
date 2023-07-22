import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Image from 'next/image';

export default function SettingButton({
  updateTaskStatus,
  optionText
}: {
  updateTaskStatus: () => void;
  optionText: string;
}) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        position='absolute'
        top='0'
        right='-10px'
        background='none'
        _hover={{ bg: 'none' }}
      >
        <Image src='/icons/setting.svg' alt='' width={15} height={15} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={updateTaskStatus}>{optionText}</MenuItem>
      </MenuList>
    </Menu>
  );
}
