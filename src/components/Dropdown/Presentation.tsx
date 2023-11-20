import { Dispatch, SetStateAction } from "react";

import { Dropdown } from "./Dropdown";

import styles from "./dropdown.module.css";

export default function DropdownPresentation({ setIsDropdownVisible } : {
    setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <div className={styles.dropdown_wrapper} onClick={() => setIsDropdownVisible(false)}>
            {<Dropdown />}
        </div>
    )
}
