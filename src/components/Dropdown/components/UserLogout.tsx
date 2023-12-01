import { useDispatch } from "react-redux";
import { useLogoutUserMutation } from "../../../services/logoutApi";

import { setIsLoggedIn, setUserData } from "../../../store/global";

import { notifyError, notifySuccess } from "../../../utils/toast";

import styles from "../dropdown.module.css";

export function UserLogout() {
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
    <span role="button" className={styles.signout_button} onClick={logout}>
      Sign out
    </span>
  );
}
