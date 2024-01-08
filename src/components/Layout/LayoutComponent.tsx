import { Box, useMediaQuery } from '@chakra-ui/react'
import NavbarDesktop from './Navbar/NavbarDesktop'
import NavbarMobile from './Navbar/NavbarMobile'
import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux'
import { RootState } from '@/src/store'
import { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { DROPDOWN_LINKS } from '../Dropdown/DropdownConstants'

const MemberRoleUpdateModal = dynamic(
  () => import('@/src/components/Modals/MemberRoleUpdateModal'),
  { ssr: false },
)
const MemberSkillUpdateModal = dynamic(
  () => import('@/src/components/Modals/MembersSkillUpdateModal'),
  { ssr: false },
)
const TaskStatusUpdateModal = dynamic(
  () => import('@/src/components/Modals/TaskStatusUpdate'),
  { ssr: false },
)

type Props = {
  children?: JSX.Element
}

export default function LayoutComponent({ children }: Props) {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const {
    isUserRoleUpdateModalVisible,
    isUserSkillUpdateModalVisible,
    isTaskUpdateModalVisible,
  } = useSelector((state: RootState) => state.superUserOption)

  const { isLoggedIn, firstName, imageURL } = useSelector(
    (state: RootState) => ({
      isLoggedIn: state.global.isLoggedIn,
      firstName: state.global.firstName,
      imageURL: state.global.imageURL,
    }),
  )

  let NavbarComponent

  if (isLargerThan1024)
    NavbarComponent = (
      <NavbarDesktop
        isLoggedIn={isLoggedIn}
        firstName={firstName}
        imageURL={imageURL}
        setIsDropdownVisible={setIsDropdownVisible}
      />
    )
  else
    NavbarComponent = (
      <NavbarMobile
        isLoggedIn={isLoggedIn}
        firstName={firstName}
        imageURL={imageURL}
        setIsDropdownVisible={setIsDropdownVisible}
      />
    )

  return (
    <Box position="relative">
      <>{NavbarComponent}</>
      <Box as="main">
        <Box>{children}</Box>
      </Box>
      {isUserRoleUpdateModalVisible && <MemberRoleUpdateModal />}
      {isUserSkillUpdateModalVisible && <MemberSkillUpdateModal />}
      {isTaskUpdateModalVisible && <TaskStatusUpdateModal />}
      {isDropdownVisible && (
        <Dropdown
          dropdownLinks={DROPDOWN_LINKS}
          setIsDropdownVisible={setIsDropdownVisible}
        />
      )}
    </Box>
  )
}
