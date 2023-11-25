import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "@/src/store/global";

import { notifyError, notifySuccess } from '../../utils/toast';
import { DropdownPresentation } from "./Presentation";

import { DROPDOWN_LINKS } from "./DropdownConstants";

import styles from "./dropdown.module.css";
import { useLogoutUserMutation } from "@/src/services/logoutApi";

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
        <div className={styles.dropdown_wrapper} onClick={() => setIsDropdownVisible(false)}>
            <DropdownPresentation logout={logout} dropdownLinks={DROPDOWN_LINKS} />
        </div>
    )
}
