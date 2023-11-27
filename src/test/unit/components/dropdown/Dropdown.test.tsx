import { screen } from "@testing-library/react";

import Dropdown from "../../../../components/Dropdown/index";
import { renderWithProviders } from "../../../../test__utils/renderWithProvides";

describe("Dropdown", () => {
  test("render Dropdown correctly", () => {
    const setIsDropdownVisible = jest.fn();

    renderWithProviders(
      <Dropdown setIsDropdownVisible={setIsDropdownVisible} />
    );

    const dropdownComponent = screen.getByTestId("dropdown");
    expect(dropdownComponent).toBeInTheDocument();
  });
});
