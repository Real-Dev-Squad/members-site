import { render, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../test__utils/renderWithProvides';

import NavbarDesktop from '../../../../components/Layout/Navbar/NavbarDesktop';
import { NAV_LINKS } from '../../../../components/Layout/Navbar/NavbarConstant';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/index';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe("NavbarDesktop component", () => {
  const setIsDropdownVisible = jest.fn();

  test("user whether loggedIn or not", async () => {
    const mockedState = {
      global: {
        isLoggedIn: false,
      },
    };

    const mockUseSelector = useSelector as jest.Mock

    mockUseSelector.mockImplementation((selectorFn) => selectorFn(mockedState));
    renderWithProviders(
        <NavbarDesktop isDropdownVisible={false} setIsDropdownVisible={setIsDropdownVisible} />
    );

    const navbar = await screen.findByTestId("navbarDesktop");
    expect(navbar).toBeInTheDocument();

    const logo = screen.getByAltText("RDS logo");
    expect(logo).toBeInTheDocument();

    const githubLogin = screen.getByText("Sign in with github");
    expect(githubLogin).toBeInTheDocument();
  });

  test("renders Navbar Links", async () => {
    const mockedState = {
      global: {
        isLoggedIn: false,
      },
    };

    const mockUseSelector = useSelector as jest.Mock

    mockUseSelector.mockImplementation((selectorFn) => selectorFn(mockedState));
    renderWithProviders(
        <NavbarDesktop isDropdownVisible={false} setIsDropdownVisible={setIsDropdownVisible} />
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
    const mockedState = {
      global: {
        isLoggedIn: false,
      },
    };

    const mockUseSelector = useSelector as jest.Mock

    mockUseSelector.mockImplementation((selectorFn) => selectorFn(mockedState));
    renderWithProviders(
        <NavbarDesktop isDropdownVisible={false} setIsDropdownVisible={setIsDropdownVisible} />
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
  });

  test("userLoggedIn", () => {
    const mockedState = {
      global: {
        isLoggedIn: true,
      },
    };

    const mockUseSelector = useSelector as jest.Mock
    mockUseSelector.mockImplementation((selectorFn) => selectorFn(mockedState));


    renderWithProviders(
      <NavbarDesktop isDropdownVisible={false} setIsDropdownVisible={setIsDropdownVisible} />
    )
    
    expect(screen.getByTestId("userProfile")).toBeInTheDocument();
  })
});
