import { useState } from 'react';
import NewMemberCardPresentation from './Presentation';
import { useDispatch, useSelector } from 'react-redux';
import { setIsUserRoleUpdateModalVisible, setUserSkillModalVisibility } from '@/src/store/superUserOptions';
import { RootState } from '@/src/store';
import { useGetIsSuperUser } from '@/src/utils/customHooks';

export default function NewMemberCard({ user }: { user: MemberType }) {
  const [shouldShowSetting, setShouldShowSetting] = useState(false);
  const isSuperUser = useGetIsSuperUser();
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
      })
    );
  }

  function openSkillUpdateModal() {
    hideSetting();
    reduxDispatch(setUserSkillModalVisibility({ visibility: true, userId: user.username }));
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
    />
  );
}
