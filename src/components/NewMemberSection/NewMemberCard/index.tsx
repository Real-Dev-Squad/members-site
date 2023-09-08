import { useState } from "react";
import NewMemberCardPresentation from "./Presentation";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsUserRoleUpdateModalVisible,
  setUserSkillModalVisibility,
} from "@/src/store/superUserOptions";
import { RootState } from "@/src/store";
import { useGetIsSuperUser } from "@/src/utils/customHooks";
import { useRouter } from "next/router";

export default function NewMemberCard({ user }: { user: MemberType }) {
  const [shouldShowSetting, setShouldShowSetting] = useState(false);
  const isSuperUser = useGetIsSuperUser();
  const router = useRouter();
  const reduxDispatch = useDispatch();
  const { isOptionKeyPressed } = useSelector(
    (state: RootState) => state.keyboard
  );

  function showSetting() {
    if (isOptionKeyPressed) setShouldShowSetting(true);
  }

  function hideSetting() {
    setShouldShowSetting(false);
  }

  function openUserRoleUpdateModal() {
    hideSetting();
    reduxDispatch(
      setIsUserRoleUpdateModalVisible({
        visibility: true,
        username: user.username,
        isUserMember: false,
        isUserArchived: user.roles.archived,
        userId: user.id,
      })
    );
  }

  function openSkillUpdateModal() {
    hideSetting();
    reduxDispatch(
      setUserSkillModalVisibility({
        visibility: true,
        userId: user.username,
        picture: user?.picture?.url,
        firstName: user?.first_name,
        lastName: user?.last_name,
      })
    );
  }

  function onCardClick() {
    if (isOptionKeyPressed && isSuperUser) router.push(`${user.username}`);
  }

  return (
    <NewMemberCardPresentation
      username={`${user.first_name} ${user.last_name}`}
      displayPic={user?.picture?.url}
      shouldShowSetting={shouldShowSetting}
      openRoleUpdateModal={openUserRoleUpdateModal}
      openSkillUpdateModal={openSkillUpdateModal}
      showSetting={showSetting}
      hideSetting={hideSetting}
      isSuperUser={isSuperUser}
      onClick={onCardClick}
    />
  );
}
