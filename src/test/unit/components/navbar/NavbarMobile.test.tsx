import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../test__utils/renderWithProvides';

import NavbarMobile from '../../../../components/Layout/Navbar/NavbarMobile';
import { NAV_LINKS } from '../../../../components/Layout/Navbar/NavbarConstant';

describe('NavbarMobile component', () => {
  const setIsDropdownVisible = jest.fn();

  test('should render github login when user is not logged in', async () => {
    renderWithProviders(
      <NavbarMobile
        isLoggedIn={false}
        isDropdownVisible={false}
        firstName={null}
        imageURL={null}
        setIsDropdownVisible={setIsDropdownVisible}
      />,
    );

    const navbar = await screen.findByTestId('navbarMobile');
    expect(navbar).toBeInTheDocument();

    const githubLogin = screen.getByText('Sign in with github');
    expect(githubLogin).toBeInTheDocument();
  });

  test('should render hamburger button', () => {
    renderWithProviders(
      <NavbarMobile
        isLoggedIn={false}
        isDropdownVisible={false}
        firstName={null}
        imageURL={null}
        setIsDropdownVisible={setIsDropdownVisible}
      />,
    );

    const hamburgerButton = screen.getByTestId('hamburger');
    expect(hamburgerButton).toBeInTheDocument();
  });

  test('should render navbar links when user click on hamburger button', async () => {
    renderWithProviders(
      <NavbarMobile
        isLoggedIn={false}
        isDropdownVisible={false}
        firstName={null}
        imageURL={null}
        setIsDropdownVisible={setIsDropdownVisible}
      />,
    );

    const hamburgerButton = screen.getByTestId('hamburger');
    expect(hamburgerButton).toBeInTheDocument();

    fireEvent.click(hamburgerButton);

    const linksContainer = await screen.findByTestId('linksContainer');
    expect(linksContainer).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: 'Welcome' });
    const eventLink = screen.getByRole('link', { name: 'Events' });
    const memberLink = screen.getByRole('link', { name: 'Members' });
    // TODO: Uncomment when crypto is added
    // const cryptoLink = screen.getByRole("link", { name: "Crypto" });
    const statusLink = screen.getByRole('link', { name: 'Status' });

    expect(homeLink).toBeInTheDocument();
    expect(eventLink).toBeInTheDocument();
    expect(memberLink).toBeInTheDocument();
    // TODO: Uncomment when crypto is added
    // expect(cryptoLink).toBeInTheDocument();
    expect(statusLink).toBeInTheDocument();
  });

  test('should render all nav items with correct links', async () => {
    renderWithProviders(
      <NavbarMobile
        isLoggedIn={false}
        isDropdownVisible={false}
        firstName={null}
        imageURL={null}
        setIsDropdownVisible={setIsDropdownVisible}
      />,
    );

    const hamburgerButton = screen.getByTestId('hamburger');
    expect(hamburgerButton).toBeInTheDocument();

    fireEvent.click(hamburgerButton);

    const linksContainer = await screen.findByTestId('linksContainer');
    expect(linksContainer).toBeInTheDocument();

    // TODO: Update the length to 5 when crypto is added
    expect(NAV_LINKS).toHaveLength(4);

    const welcomelink = screen.getByRole('link', { name: 'Welcome' });
    const eventLink = screen.getByRole('link', { name: 'Events' });
    const memberLink = screen.getByRole('link', { name: 'Members' });
    // TODO: Uncomment when crypto is added
    // const cryptoLink = screen.getByRole("link", { name: "Crypto" });
    const statusLink = screen.getByRole('link', { name: 'Status' });

    expect(welcomelink).toHaveAttribute(
      'href',
      'https://welcome.realdevsquad.com/',
    );
    expect(eventLink).toHaveAttribute(
      'href',
      'https://www.realdevsquad.com/events',
    );
    expect(memberLink).toHaveAttribute(
      'href',
      'https://members.realdevsquad.com/',
    );
    // TODO: Uncomment when crypto is added
    // expect(cryptoLink).toHaveAttribute(
    //     "href",
    //     "https://crypto.realdevsquad.com/"
    // );
    expect(statusLink).toHaveAttribute(
      'href',
      'https://status.realdevsquad.com/',
    );
  });

  test('should render user profile when user is logged in', () => {
    const first_name = 'Anish';
    const imageURL = '/img/Anish.png';
    renderWithProviders(
      <NavbarMobile
        isLoggedIn={true}
        isDropdownVisible={false}
        firstName={first_name}
        imageURL={imageURL}
        setIsDropdownVisible={setIsDropdownVisible}
      />,
    );

    const userProfile = screen.getByTestId('userProfile');
    expect(userProfile).toBeInTheDocument();
    fireEvent.click(userProfile);

    const userName = screen.getByText('Hello, Anish');
    expect(userName).toBeInTheDocument();
  });
});
