import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../test__utils/renderWithProvides";
import { membersData } from "../../../../mocks/db/members";

import MembersCardPresentation from "../../../../components/MembersSectionNew/components/MembersCard/Presentation";
import SettingButton from "../../../../components/SettingButton/SettingButton";

describe("MembersCardPresentation", () => {
  test("should render members card", () => {
    const openSkillUpdateModal = jest.fn();
    const openUserRoleUpdateModal = jest.fn();
    const hideSetting = jest.fn();
    const showSetting = jest.fn();
    const routeHandler = jest.fn();

    renderWithProviders(
      <MembersCardPresentation
        member={membersData[3]}
        openRoleUpdateModal={openUserRoleUpdateModal}
        openSkillUpdateModal={openSkillUpdateModal}
        shouldShowSetting={false}
        showSetting={showSetting}
        hideSetting={hideSetting}
        routeHandler={routeHandler}
        isSuperUser={false}
      />
    );

    const userImage = screen.getAllByAltText("Picture of the author");
    expect(userImage).toHaveLength(2);

    const username = screen.getByRole("heading", {
      name: /vinayak trivedi/i,
    });
    expect(username).toBeInTheDocument();

    const designation = screen.getByTestId("designation");
    expect(designation).toBeInTheDocument();

    const socials = screen.getByTestId("socials links");
    expect(socials).toBeInTheDocument();
  });
  test("should show setting button if user is super-user and have press alt key", () => {
    const openSkillUpdateModal = jest.fn();
    const openUserRoleUpdateModal = jest.fn();
    const hideSetting = jest.fn();
    const showSetting = jest.fn();
    const routeHandler = jest.fn();

    renderWithProviders(
      <MembersCardPresentation
        member={membersData[3]}
        openRoleUpdateModal={openUserRoleUpdateModal}
        openSkillUpdateModal={openSkillUpdateModal}
        shouldShowSetting={true}
        showSetting={showSetting}
        hideSetting={hideSetting}
        routeHandler={routeHandler}
        isSuperUser={true}
      />
    );

    const button = screen.getByTestId("member card button");
    expect(button).toBeInTheDocument();
    fireEvent.keyPress(button);
    fireEvent.mouseEnter(button);

    const { container } = render(
      <SettingButton
        openRoleUpdateModal={openUserRoleUpdateModal}
        openSkillUpdateModal={openSkillUpdateModal}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
