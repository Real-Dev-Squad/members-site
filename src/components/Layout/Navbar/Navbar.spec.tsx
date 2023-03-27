import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('should render the normal navbar in case the screen size is above 1024px', () => {

    const { getByText, getByTestId } = render(<Navbar />);

    const navbar = getByTestId('navbar')
    expect(navbar).toBeInTheDocument()

    // testing all the links are there in the component
    const homeLink = getByText('Home')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', 'https://realdevsquad.com/')

    const welcomeLink = getByText('Welcome')
    expect(welcomeLink).toBeInTheDocument()
    expect(welcomeLink).toHaveAttribute('href', 'https://welcome.realdevsquad.com/')

    const eventLink = getByText('Events')
    expect(eventLink).toBeInTheDocument()
    expect(eventLink).toHaveAttribute('href', 'https://www.realdevsquad.com/events')

    const membersLink = getByText('Members')
    expect(membersLink).toBeInTheDocument()
    expect(membersLink).toHaveAttribute('href', 'https://members.realdevsquad.com/')

    const cryptoLink = getByText('Crypto')
    expect(cryptoLink).toBeInTheDocument()
    expect(cryptoLink).toHaveAttribute('href', 'https://crypto.realdevsquad.com/')

    const statusLink = getByText('Status')
    expect(statusLink).toBeInTheDocument()
    expect(statusLink).toHaveAttribute('href', 'https://status.realdevsquad.com/')
  })
})