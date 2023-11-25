import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../store/global";
import { useLogoutUserMutation } from "../../services/logoutApi";

import { DROPDOWN_LINKS } from "./DropdownConstants";

import { notifyError, notifySuccess } from '../../utils/toast';
import { DropdownPresentation } from "./Presentation";


export default function Dropdown({ setIsDropdownVisible } : {
    setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
    const reduxDispatch = useDispatch();
    const [ logoutUser ] = useLogoutUserMutation();

    const logout = () => {
        logoutUser()
          .unwrap()
          .then(() => {
            reduxDispatch(setIsLoggedIn({isLoggedIn: false}));
            notifySuccess('User logged out successfully')
          })
          .catch((error) => {
            const errorMessage = error?.data?.message || 'Something went wrong!';
            notifyError(errorMessage);
          })
    }

    return (
      <DropdownPresentation logout={logout} dropdownLinks={DROPDOWN_LINKS} setIsDropdownVisible={setIsDropdownVisible} />
    )
}
