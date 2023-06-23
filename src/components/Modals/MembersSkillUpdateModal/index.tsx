import { RootState } from "@/src/store";
import { useDispatch, useSelector } from "react-redux";
import MembersSkillUpdateModalPresentation from "./Presentation";
import { setUserSkillModalVisibility } from "@/src/store/superUserOptions";

export default function MembersSkillUpdateModal() {
  const { isUserSkillUpdateModalVisible } = useSelector(
    (state: RootState) => state.superUserOption
  );

  const reduxDispatch = useDispatch();

  function closeSkillUpdateModal() {
    reduxDispatch(setUserSkillModalVisibility({
      visibility: false,
      username: null,
      profileURL: null,
      firstName: null,
      lastName: null
    }));
  }

  return (
    <MembersSkillUpdateModalPresentation
      isOpen={isUserSkillUpdateModalVisible}
      onClose={closeSkillUpdateModal}
    />
  );
}