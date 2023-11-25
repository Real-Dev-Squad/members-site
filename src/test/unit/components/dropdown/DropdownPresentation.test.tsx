import { fireEvent, screen } from '@testing-library/react';

import { DROPDOWN_LINKS } from "../../../../components/Dropdown/DropdownConstants";
import { DropdownPresentation } from "../../../../components/Dropdown/Presentation";
import { renderWithProviders } from "../../../../test__utils/renderWithProvides";

describe("DropdownPresentation", () => {
    const logout = jest.fn();
    const setIsDropdownVisible = jest.fn();
    test("render dropdown links correctly", () => {
        renderWithProviders(
            <DropdownPresentation logout={logout} dropdownLinks={DROPDOWN_LINKS} setIsDropdownVisible={setIsDropdownVisible} />
        );

        expect(DROPDOWN_LINKS).toHaveLength(5);

        const homeLink = screen.getByRole("link", { name: "Home"});
        expect(homeLink).toBeInTheDocument();

        const userStatusLink = screen.getByRole("link", { name: "Status" });
        expect(userStatusLink).toBeInTheDocument();

        const profileLink = screen.getByRole("link", { name: "Profile" });
        expect(profileLink).toBeInTheDocument();

        const taskLink = screen.getByRole("link", { name: "Tasks" });
        expect(taskLink).toBeInTheDocument();

        const identityLink = screen.getByRole("link", { name: "Identity" });
        expect(identityLink).toBeInTheDocument();

        const signoutButton = screen.getByTestId("signoutButton");
        expect(signoutButton).toBeInTheDocument();
    })

    test("should navigate to a different route when a link is pressed", () => {
        renderWithProviders(
            <DropdownPresentation logout={logout} dropdownLinks={DROPDOWN_LINKS} setIsDropdownVisible={setIsDropdownVisible} />
        );

        expect(DROPDOWN_LINKS).toHaveLength(5);

        const homeLink = screen.getByRole("link", { name: "Home"});
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute(
            "href",
            "https://www.realdevsquad.com"
        );

        const userStatusLink = screen.getByRole("link", { name: "Status" });
        expect(userStatusLink).toBeInTheDocument();
        expect(userStatusLink).toHaveAttribute(
            "href",
            "https://my.realdevsquad.com"
        );

        const profileLink = screen.getByRole("link", { name: "Profile" });
        expect(profileLink).toBeInTheDocument();
        expect(profileLink).toHaveAttribute(
            "href",
            "https://my.realdevsquad.com/profile"
        );

        const taskLink = screen.getByRole("link", { name: "Tasks" });
        expect(taskLink).toBeInTheDocument();
        expect(taskLink).toHaveAttribute(
            "href",
            "https://my.realdevsquad.com/tasks"
        );

        const identityLink = screen.getByRole("link", { name: "Identity" });
        expect(identityLink).toBeInTheDocument();
        expect(identityLink).toHaveAttribute(
            "href",
            "https://my.realdevsquad.com/identity"
        );

        const signoutButton = screen.getByTestId("signoutButton");
        expect(signoutButton).toBeInTheDocument();

        fireEvent.click(signoutButton);

        
    })
})