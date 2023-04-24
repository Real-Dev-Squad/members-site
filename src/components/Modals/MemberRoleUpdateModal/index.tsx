import { useDispatch, useSelector } from "react-redux"
import MemberRoleUpdateModalPresentation from "./Presentation"
import { RootState } from "@/src/store";
import { setIsUserRoleUpdateModalVisible } from "@/src/store/superUserOptions";

export default function MemberRoleUpdateModal() {
  const {isUserRoleUpdateModalVisible} = useSelector((state: RootState) => state.superUserOption);
  const reduxDispatch = useDispatch()

  function closeUserRoleUpdateModal() {
    reduxDispatch(setIsUserRoleUpdateModalVisible({visibility: false}))
  }

  return <MemberRoleUpdateModalPresentation isOpen={isUserRoleUpdateModalVisible} onClose={closeUserRoleUpdateModal} />
}