import { useDispatch, useSelector } from 'react-redux';
import MemberRoleUpdateModalPresentation from './Presentation';
import { RootState } from '@/src/store';
import { setIsUserRoleUpdateModalVisible } from '@/src/store/superUserOptions';
import {
  useArchiveMemberMutation,
  useUpdateMemberRoleMutation,
} from '@/src/services/serverApi';

export default function MemberRoleUpdateModal() {
  const { isUserRoleUpdateModalVisible, username } = useSelector(
    (state: RootState) => state.superUserOption
  );
  console.log(username)
  const [updateMemberRole] = useUpdateMemberRoleMutation();
  const [archieveMemberMutation] = useArchiveMemberMutation();
  const reduxDispatch = useDispatch();

  function closeUserRoleUpdateModal() {
    reduxDispatch(setIsUserRoleUpdateModalVisible({ visibility: false, username: null }));
  }

  function promoteToMember() {
    updateMemberRole({ username })
      .unwrap()
      .then((res) => {
        // TODO: do something with the response here
      })
      .catch((err) => {
        // TODO: do something with the error here
      });
  }

  function archieveMember() {
    archieveMemberMutation({ username })
      .unwrap()
      .then((res) => {
        //TODO: do something with response heres
      })
      .then((res) => {
        // TODO: do something with error here
      });
  }

  return (
    <MemberRoleUpdateModalPresentation
      isOpen={isUserRoleUpdateModalVisible}
      onClose={closeUserRoleUpdateModal}
      promoteUserToMember={promoteToMember}
      archieveMember={archieveMember}
    />
  );
}
