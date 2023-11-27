import { render, waitFor } from '@testing-library/react';
import UserProfile from '../../../../components/Layout/Navbar/components/UserProfile';

jest.mock('../../../../services/serverApi', () => ({
  useGetSelfDetailsQuery: jest.fn(() => ({
    data: {
      first_name: 'Anish',
      picture: {
        url: '/images/mockAvatar.png',
      },
    },
    isLoading: false,
  })),
}));

test('UserProfile renders correctly', async () => {
  const setIsDropdownVisible = jest.fn();

  const { getByText, getByAltText } = render(
    <UserProfile isDropdownVisible={false} setIsDropdownVisible={setIsDropdownVisible} />
  );

  
  await waitFor(() => {
    expect(getByText('Hello, Anish')).toBeInTheDocument();
    expect(getByAltText('')).toBeInTheDocument();
  });
});
