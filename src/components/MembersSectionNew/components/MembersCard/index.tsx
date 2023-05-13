import { useDispatch, useSelector } from "react-redux";
import { MemberType } from "../../types/MembersSection.type";
import MembersCardPresentation from "./Presentation";
import { setIsUserRoleUpdateModalVisible, setUserSkillModalVisibility } from "@/src/store/superUserOptions";
import { RootState } from "@/src/store";
import { useState } from "react";

export default function MembersCard({ member }: { member: MemberType }) {
  const [shouldShowSetting, setShouldShowSetting] = useState(false)
  const reduxDispatch = useDispatch()

  function showSetting() {
    if (isOptionKeyPressed) setShouldShowSetting(true)
  }

  function hideSetting() {
    setShouldShowSetting(false)
  }

  function openUserRoleUpdateModal() {
    console.log(member)
    hideSetting()
    reduxDispatch(setIsUserRoleUpdateModalVisible({visibility: true, username: member.username}))
  }

  function openSkillUpdateModal() {
    hideSetting()
    reduxDispatch(setUserSkillModalVisibility({visibility: true}))
  }

  const { isOptionKeyPressed } = useSelector((state: RootState) => state.keyboard)
  return (
    <MembersCardPresentation
      member={member}
      openRoleUpdateModal={openUserRoleUpdateModal}
      openSkillUpdateModal={openSkillUpdateModal}
      shouldShowSetting={shouldShowSetting}
      showSetting={showSetting}
      hideSetting={hideSetting}
    />
  );
}