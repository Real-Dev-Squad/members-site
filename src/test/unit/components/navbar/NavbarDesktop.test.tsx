import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../test__utils/renderWithProvides';

import NavbarDesktop from '../../../../components/Layout/Navbar/NavbarDesktop';
import { NAV_LINKS } from '../../../../components/Layout/Navbar/NavbarConstant';

describe("NavbarDesktop component", () => {
  test("user whether loggedIn or not", async () => {
    renderWithProviders(
        <NavbarDesktop />
    );

    const navbar = await screen.findByTestId("navbarDesktop");
    expect(navbar).toBeInTheDocument();

    const logo = screen.getByAltText("RDS logo");
    expect(logo).toBeInTheDocument();

    const githubLogin = screen.getByText("Sign in with github");
    expect(githubLogin).toBeInTheDocument();
  });

  test("renders Navbar Links", async () => {
    renderWithProviders(
        <NavbarDesktop />
    )
    
    await screen.findAllByTestId("navbarDesktop");

    // TODO: Update the length to 5 when crypto is added
    expect(NAV_LINKS).toHaveLength(4);

    const homeLink = screen.getByRole("link", { name: "Welcome" });
    const eventLink = screen.getByRole("link", { name: "Events" });
    const memberLink = screen.getByRole("link", { name: "Members" });
    // TODO: Uncomment when crypto is added
    // const cryptoLink = screen.getByRole("link", { name: "Crypto" });
    const statusLink = screen.getByRole("link", { name: "Status" });

    expect(homeLink).toBeInTheDocument();
    expect(eventLink).toBeInTheDocument();
    expect(memberLink).toBeInTheDocument();
    // TODO: Uncomment when crypto is added
    // expect(cryptoLink).toBeInTheDocument();
    expect(statusLink).toBeInTheDocument();
  })

  test("should navigate to a different route when a link is pressed", async () => {
    renderWithProviders(
        <NavbarDesktop />
    );
    await screen.findAllByTestId("navbarDesktop");
    
    // TODO: Update the length to 5 when crypto is added
    expect(NAV_LINKS).toHaveLength(4);

    const welcomelink = screen.getByRole("link", { name: "Welcome" });
    const eventLink = screen.getByRole("link", { name: "Events" });
    const memberLink = screen.getByRole("link", { name: "Members" });
    // TODO: Uncomment when crypto is added
    // const cryptoLink = screen.getByRole("link", { name: "Crypto" });
    const statusLink = screen.getByRole("link", { name: "Status" });

    expect(welcomelink).toHaveAttribute(
        "href",
        "https://welcome.realdevsquad.com/"
    );
    expect(eventLink).toHaveAttribute(
        "href",
        "https://www.realdevsquad.com/events"
    );
    expect(memberLink).toHaveAttribute(
        "href",
        "https://members.realdevsquad.com/"
    );
    // TODO: Uncomment when crypto is added
    // expect(cryptoLink).toHaveAttribute(
    //     "href",
    //     "https://crypto.realdevsquad.com/"
    // );
    expect(statusLink).toHaveAttribute(
        "href",
        "https://status.realdevsquad.com/"
    );
  })
});
