import { fireEvent, render, screen } from '@testing-library/react'

import { UserProfileWithGitHubLogin } from '../../../../../components/Layout/Navbar/components/UserProfileWithGitHubLogin'

describe('UserProfileWithGithubLogin', () => {
  const setIsDropdownVisible = jest.fn()

  test('should render github button when user is not logged in', () => {
    render(
      <UserProfileWithGitHubLogin
        isLoggedIn={false}
        isDropdownVisible={false}
        firstName={null}
        imageURL={null}
        setIsDropdownVisible={setIsDropdownVisible}
      />,
    )

    const githubButton = screen.getByText('Sign in with github')
    expect(githubButton).toBeInTheDocument()
  })

  test('should render user profile when user is logged in', () => {
    const first_name = 'Anish'
    const imageURL = '/img/anish.png'

    render(
      <UserProfileWithGitHubLogin
        isLoggedIn={true}
        isDropdownVisible={false}
        firstName={first_name}
        imageURL={imageURL}
        setIsDropdownVisible={setIsDropdownVisible}
      />,
    )

    const userProfile = screen.getByTestId('userProfile')
    expect(userProfile).toBeInTheDocument()

    const userName = screen.getByText('Hello, Anish')
    expect(userName).toBeInTheDocument()
  })
})
