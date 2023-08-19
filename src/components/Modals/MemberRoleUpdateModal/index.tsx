import { useDispatch, useSelector } from 'react-redux';
import MemberRoleUpdateModalPresentation from './Presentation';
import { RootState } from '@/src/store';
import { setIsUserRoleUpdateModalVisible } from '@/src/store/superUserOptions';
import {
  useArchiveMemberMutation,
  useUpdateMemberRoleMutation,
  useUpdateUserRoleMutation,
} from '@/src/services/serverApi';

export default function MemberRoleUpdateModal() {
  const { isUserRoleUpdateModalVisible, userId, isUserMember, isUserArchived } =
    useSelector((state: RootState) => state.superUserOption);
  const [updateUserRole] = useUpdateUserRoleMutation();
  const reduxDispatch = useDispatch();

  function closeUserRoleUpdateModal() {
    reduxDispatch(
      setIsUserRoleUpdateModalVisible({
        visibility: false,
        username: null,
        isUserMember: false,
        isUserArchived: false,
        userId: null,
      })
    );
  }

  function promoteOrDemoteMember() {
    updateUserRole({ userId, body: { member: !isUserMember } })
      .unwrap()
      .then((res) => {})
      .catch((err) => {});
  }

  function archiveOrUnarchiveMember() {
    updateUserRole({ userId, body: { archived: !isUserArchived } })
      .unwrap()
      .then((res) => {})
      .catch((err) => {});
  }

  return (
    <MemberRoleUpdateModalPresentation
      isOpen={isUserRoleUpdateModalVisible}
      onClose={closeUserRoleUpdateModal}
      promoteOrDemoteMember={promoteOrDemoteMember}
      archiveOrUnarchiveMember={archiveOrUnarchiveMember}
      isUserArchived={isUserArchived}
      isUserMember={isUserMember}
    />
  );
}
