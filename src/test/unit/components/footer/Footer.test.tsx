import { render } from '@testing-library/react';
import Footer from '../../../../components/Footer/index';

describe('Footer', () => {
  it('should render the Footer component', () => {
    const { getByRole, getByText } = render(<Footer />);
    const footerElement = getByText(
      /The contents of this website are deployed from this/i,
    );
    const linkElement = getByRole('link', { name: 'open source repository' });
    const expectedRepoUrl = 'https://github.com/Real-Dev-Squad/members-site';

    expect(footerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe(expectedRepoUrl);
  });
});
