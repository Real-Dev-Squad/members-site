import { Box, useMediaQuery } from "@chakra-ui/react";
import NavbarDesktop from "./Navbar/NavbarDesktop";
import NavbarMobile from "./Navbar/NavbarMobile";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { useState } from "react";
import Dropdown from "../Dropdown";

const MemberRoleUpdateModal = dynamic(
  () => import("@/src/components/Modals/MemberRoleUpdateModal"),
  { ssr: false }
);
const MemberSkillUpdateModal = dynamic(
  () => import("@/src/components/Modals/MembersSkillUpdateModal"),
  { ssr: false }
);
const TaskStatusUpdateModal = dynamic(
  () => import("@/src/components/Modals/TaskStatusUpdate"),
  { ssr: false }
);

type Props = {
  children?: JSX.Element;
};

export default function LayoutComponent({ children }: Props) {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const {
    isUserRoleUpdateModalVisible,
    isUserSkillUpdateModalVisible,
    isTaskUpdateModalVisible,
  } = useSelector((state: RootState) => state.superUserOption);

  const { isLoggedIn, firstName, imageURL } = useSelector(
    (state: RootState) => state.global
  );

  let NavbarComponent;

  if (isLargerThan1024)
    NavbarComponent = (
      <NavbarDesktop
        isLoggedIn={isLoggedIn}
        isDropdownVisible={isDropdownVisible}
        firstName={firstName}
        imageURL={imageURL}
        setIsDropdownVisible={setIsDropdownVisible}
      />
    );
  else
    NavbarComponent = (
      <NavbarMobile
        isLoggedIn={isLoggedIn}
        isDropdownVisible={isDropdownVisible}
        firstName={firstName}
        imageURL={imageURL}
        setIsDropdownVisible={setIsDropdownVisible}
      />
    );

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
        <Dropdown setIsDropdownVisible={setIsDropdownVisible} />
      )}
    </Box>
  );
}
