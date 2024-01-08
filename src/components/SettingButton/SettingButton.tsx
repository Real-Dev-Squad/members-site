import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Image from 'next/image'
import { SyntheticEvent } from 'react'

export default function SettingButton({
  openRoleUpdateModal,
  openSkillUpdateModal,
}: {
  openRoleUpdateModal: (e: SyntheticEvent) => void
  openSkillUpdateModal: (e: any) => void
}) {
  return (
    <Menu>
      <MenuButton
        onClick={(e) => e.stopPropagation()}
        as={Button}
        position="absolute"
        top="0"
        right="0"
        background="none"
        _hover={{ bg: 'none' }}
      >
        <Image src="/icons/setting.svg" alt="" width={20} height={20} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={openRoleUpdateModal}>Update user role</MenuItem>
        <MenuItem onClick={openSkillUpdateModal}>Add/remove skills</MenuItem>
      </MenuList>
    </Menu>
  )
}
