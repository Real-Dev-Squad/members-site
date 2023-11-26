import { fireEvent, screen, waitFor } from '@testing-library/react';

import Dropdown from "../../../../components/Dropdown/index";
import { renderWithProviders } from "../../../../test__utils/renderWithProvides";
import { useLogoutUserMutation } from '../../../../services/logoutApi';

jest.mock('../../../../services/logoutApi', () => ({
    useLogoutUserMutation: jest.fn(),
  }));
  

const mockResolvedValue = 'Logout successful';
const mockLogoutUser = jest.fn(() => ({
  unwrap: () => Promise.resolve(mockResolvedValue),
}));
(useLogoutUserMutation as jest.Mock).mockImplementation(() => [mockLogoutUser]);



describe("Dropdown", () => {
    const setIsDropdownVisible = jest.fn();
    test("should render dropdown compoennt correctly", () => {
        renderWithProviders(
            <Dropdown setIsDropdownVisible={setIsDropdownVisible} />
        )

        const dropdownComponent = screen.getByTestId("dropdown");
        expect(dropdownComponent).toBeInTheDocument();
    })

    test("should logout successfully", async () => {
        renderWithProviders(
            <Dropdown setIsDropdownVisible={setIsDropdownVisible} />
        )

        const signoutButton = screen.getByTestId("signoutButton");
        expect(signoutButton).toBeInTheDocument();

        fireEvent.click(signoutButton);

        await waitFor(() => {
            expect(mockLogoutUser).toHaveBeenCalled();
        });
    })

    test("should handle logout error", async () => {
        const mockErrorMessage = "Logout failed";
        const mockLogoutUserFailure = jest.fn(() => ({
            unwrap: () => Promise.reject(new Error(mockErrorMessage)),
        }))
        useLogoutUserMutation.mockImplementation(() => [mockLogoutUserFailure]);

        renderWithProviders(
            <Dropdown setIsDropdownVisible={setIsDropdownVisible} />
        )

        const signoutButton = screen.getByTestId("signoutButton");
        expect(signoutButton).toBeInTheDocument();

        fireEvent.click(signoutButton);

        await waitFor(() => {
            expect(mockLogoutUserFailure).toHaveBeenCalled();
        });
    })
});
