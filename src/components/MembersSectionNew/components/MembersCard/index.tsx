import { useDispatch, useSelector } from "react-redux";
import { user } from "../../types/MembersSection.type";
import MembersCardPresentation from "./Presentation";
import { setIsUserRoleUpdateModalVisible } from "@/src/store/superUserOptions";
import { RootState } from "@/src/store";
import { useState } from "react";

export default function MembersCard({ member }: { member: user }) {
  const [shouldShowSetting, setShouldShowSetting] = useState(false)
  const reduxDispatch = useDispatch()

  function showSetting() {
    if (isOptionKeyPressed) setShouldShowSetting(true)
  }

  function hideSetting() {
    if (isOptionKeyPressed) setShouldShowSetting(false)
  }

  function openUserRoleUpdateModal() {
    reduxDispatch(setIsUserRoleUpdateModalVisible({visibility: true}))
  }

  const { isOptionKeyPressed } = useSelector((state: RootState) => state.keyboard)
  return (
    <MembersCardPresentation
      member={member}
      openModal={openUserRoleUpdateModal}
      shouldShowSetting={shouldShowSetting}
      showSetting={showSetting}
      hideSetting={hideSetting}
    />
  );
}