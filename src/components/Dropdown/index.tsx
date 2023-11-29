import { Dispatch, SetStateAction } from "react";

import { DROPDOWN_LINKS } from "./DropdownConstants";

import { DropdownPresentation } from "./Presentation";

export default function Dropdown({
  setIsDropdownVisible,
}: {
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const reduxDispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const logout = () => {
    logoutUser()
      .unwrap()
      .then(() => {
        reduxDispatch(setIsLoggedIn({ isLoggedIn: false }));
        reduxDispatch(
          setUserData({
            firstName: null,
            imageURL: null,
            roles: null,
          })
        );
        notifySuccess("User logged out successfully");
      })
      .catch((error) => {
        const errorMessage = "Something went wrong!";
        notifyError(errorMessage);
      });
  };

  return (
    <DropdownPresentation
      dropdownLinks={DROPDOWN_LINKS}
      setIsDropdownVisible={setIsDropdownVisible}
    />
  );
}
