import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../../../../test__utils/renderWithProvides'
import { filteredTags } from '../../../../mocks/db/filteredTags'

import TagsMoadal from '../../../../components/Modals/MembersSkillUpdateModal/components/TagsModal/TagsModal'
import Tags from '../../../../components/Modals/MembersSkillUpdateModal/components/TagsModal/Tags'

describe('TagsModal', () => {
   test('renders correctly', async () => {
      const setIsTagsOpen = jest.fn()
      const setSearchTags = jest.fn()
      const closeModal = jest.fn()

      renderWithProviders(
         <TagsMoadal
            filteredTags={filteredTags}
            searchTags=""
            setIsTagsOpen={setIsTagsOpen}
            setSearchTags={setSearchTags}
            username="Anish"
         />,
      )
      const { container } = renderWithProviders(
         <Tags
            filteredTags={filteredTags}
            username="anish"
            inputRef={HTMLInputElement}
            setIsTagsOpen={setIsTagsOpen}
            setSearchTags={setSearchTags}
         />,
      )

      const tagModalWrapper = screen.getByTestId('tagModal bg_gray')
      expect(tagModalWrapper).toBeInTheDocument()
      fireEvent.click(tagModalWrapper)

      const inputElement = screen.getByRole('textbox')
      expect(inputElement).toBeInTheDocument()
      expect(inputElement).toHaveValue('')

      const searchButton = screen.queryByTestId('search btn')
      expect(searchButton).toBeInTheDocument()

      expect(container).toBeInTheDocument()
   })

   test('should render close button when input element has value', () => {
      const setIsTagsOpen = jest.fn()
      const setSearchTags = jest.fn()
      const clearSearch = jest.fn()

      renderWithProviders(
         <TagsMoadal
            filteredTags={filteredTags}
            searchTags="EMBER"
            setIsTagsOpen={setIsTagsOpen}
            setSearchTags={setSearchTags}
            username="Anish"
         />,
      )

      const inputElement = screen.getByRole('textbox')
      fireEvent.change(inputElement, { target: { value: 'EMBER' } })
      expect(inputElement).toBeInTheDocument()
      expect(inputElement).toHaveValue('EMBER')

      const closeButton = screen.queryByTestId('close btn')
      expect(closeButton).toBeInTheDocument()
      fireEvent.click(closeButton)
      expect(inputElement).toHaveValue('')
   })
})
