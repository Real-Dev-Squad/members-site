import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { MemberType } from "../../types/MembersSection.type";
import MembersCardPresentation from "./Presentation";
import {
  setIsUserRoleUpdateModalVisible,
  setUserSkillModalVisibility,
} from "@/src/store/superUserOptions";
import { RootState } from "@/src/store";
import { useState } from "react";
import { useGetIsSuperUser } from "@/src/utils/customHooks";

export default function MembersCard({ member }: { member: MemberType }) {
  const [shouldShowSetting, setShouldShowSetting] = useState(false);
  const isSuperUser = useGetIsSuperUser()
  const reduxDispatch = useDispatch();
  const router = useRouter();

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
        username: member.username,
        isUserMember: true,
        isUserArchived: member.roles.archived,
        userId: member.id,
      })
    );
  }

  function openSkillUpdateModal() {
    hideSetting();
    reduxDispatch(
      setUserSkillModalVisibility({
        visibility: true,
        username: member?.id,
        picture: member?.picture?.url,
        firstName: member?.first_name,
        lastName: member?.last_name,
      })
    );
  }

  function routeHandler() {
    router.push(`/${member.username}`);
  }

  const { isOptionKeyPressed } = useSelector(
    (state: RootState) => state.keyboard
  );
  return (
    <MembersCardPresentation
      member={member}
      openRoleUpdateModal={openUserRoleUpdateModal}
      openSkillUpdateModal={openSkillUpdateModal}
      shouldShowSetting={shouldShowSetting}
      showSetting={showSetting}
      hideSetting={hideSetting}
      routeHandler={routeHandler}
      isSuperUser={isSuperUser}
    />
  );
}
