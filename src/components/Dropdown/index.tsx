import { Dispatch, SetStateAction } from "react";

import { DROPDOWN_LINKS } from "./DropdownConstants";

import { DropdownPresentation } from "./Presentation";

export default function Dropdown({
  setIsDropdownVisible,
}: {
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <DropdownPresentation
      dropdownLinks={DROPDOWN_LINKS}
      setIsDropdownVisible={setIsDropdownVisible}
    />
  );
}
