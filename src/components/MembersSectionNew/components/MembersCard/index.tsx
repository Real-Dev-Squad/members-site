import { useDispatch } from "react-redux";
import { user } from "../../types/MembersSection.type";
import MembersCardPresentation from "./Presentation";
import { setIsUserRoleUpdateModalVisible } from "@/src/store/superUserOptions";

export default function MembersCard({ member }: { member: user }) {
  const reduxDispatch = useDispatch()

  function openUserRoleUpdateModal() {
    reduxDispatch(setIsUserRoleUpdateModalVisible({visibility: true}))
  }
  return <MembersCardPresentation member={member} openModal={openUserRoleUpdateModal} />;
}