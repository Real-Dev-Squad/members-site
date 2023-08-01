import { Box, useMediaQuery } from "@chakra-ui/react";
import NavbarDesktop from "./Navbar/NavbarDesktop";
import NavbarMobile from "./Navbar/NavbarMobile";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";

const MemberRoleUpdateModal = dynamic(
  () => import('@/src/components/Modals/MemberRoleUpdateModal'),
  { ssr: false }
);
const MemberSkillUpdateModal = dynamic(
  () => import('@/src/components/Modals/MembersSkillUpdateModal'),
  { ssr: false }
);
const TaskStatusUpdateModal = dynamic(
  () => import('@/src/components/Modals/TaskStatusUpdate'),
  { ssr: false }
);

type Props = {
  children?: JSX.Element;
};

export default function LayoutComponent({ children }: Props) {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  const {
    isUserRoleUpdateModalVisible,
    isUserSkillUpdateModalVisible,
    isTaskUpdateModalVisible,
  } = useSelector((state: RootState) => state.superUserOption);
  
  let NavbarComponent;

  if (isLargerThan1024) NavbarComponent = <NavbarDesktop />
  else NavbarComponent = <NavbarMobile />
  
  return (
    <Box>
      <>{NavbarComponent}</>
      <Box as='main'>
        <Box>{children}</Box>
      </Box>
      {isUserRoleUpdateModalVisible && <MemberRoleUpdateModal />}
      {isUserSkillUpdateModalVisible && <MemberSkillUpdateModal />}
      {isTaskUpdateModalVisible && <TaskStatusUpdateModal />}
    </Box>
  );
}
