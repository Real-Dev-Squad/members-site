import { fireEvent, screen, waitFor } from '@testing-library/react'
import { useLogoutUserMutation } from '../../../../../services/logoutApi'
import { renderWithProviders } from '../../../../../test__utils/renderWithProvides'

import { UserLogout } from '../../../../../components/Dropdown/components/UserLogout'

jest.mock('../../../../../services/logoutApi', () => ({
  useLogoutUserMutation: jest.fn(),
}))

describe('UserLogout', () => {
  test('should logout successfully', async () => {
    const mockResolvedValue = 'Logout successful'
    const mockLogoutUser = jest.fn(() => ({
      unwrap: () => Promise.resolve(mockResolvedValue),
    }))
    ;(useLogoutUserMutation as jest.Mock).mockImplementation(() => [
      mockLogoutUser,
    ])

    renderWithProviders(<UserLogout />)

    const signoutButton = screen.getByRole('button', { name: 'Sign out' })
    expect(signoutButton).toBeInTheDocument()
    fireEvent.click(signoutButton)

    await waitFor(() => {
      expect(mockLogoutUser).toHaveBeenCalled()
    })
  })

  test('should fail logout', async () => {
    const mockErrorMessage = 'Logout failed'
    const mockLogoutUserFailure = jest.fn(() => ({
      unwrap: () => Promise.reject(new Error(mockErrorMessage)),
    }))

    const mockUseLogoutUserWithMutation = useLogoutUserMutation as jest.Mock
    mockUseLogoutUserWithMutation.mockImplementation(() => [
      mockLogoutUserFailure,
    ])

    renderWithProviders(<UserLogout />)

    const signoutButton = screen.getByRole('button', { name: 'Sign out' })
    expect(signoutButton).toBeInTheDocument()

    fireEvent.click(signoutButton)

    await waitFor(() => {
      expect(mockLogoutUserFailure).toHaveBeenCalled()
    })
  })
})
