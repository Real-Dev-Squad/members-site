import { fireEvent, screen } from '@testing-library/react';
import { filteredTags } from '../../../../mocks/db/filteredTags';
import { skillsData } from '../../../../mocks/db/skills';
import { renderWithProviders } from '../../../../test__utils/renderWithProvides';

import MembersSkillUpdateModalPresentation from '../../../../components/Modals/MembersSkillUpdateModal/Presentation';
import MembersActiveSkills from '../../../../components/Modals/MembersSkillUpdateModal/components/MembersActiveSkills/MembersActiveSkills';
import TagsMoadal from '../../../../components/Modals/MembersSkillUpdateModal/components/TagsModal/TagsModal';

describe('MembersSkillUpdateModalPresentation', () => {
  test('renders correctly', () => {
    const onClose = jest.fn();
    const setIsTagsOpen = jest.fn();

    renderWithProviders(
      <MembersSkillUpdateModalPresentation onClose={onClose} isOpen={true} />,
    );

    const bannerElement = screen.getByRole('banner');
    expect(bannerElement).toBeInTheDocument();

    const userAvatar = screen.getByRole('img');
    expect(userAvatar).toBeInTheDocument();

    const username = screen.getByTestId('username');
    expect(username).toBeInTheDocument();

    const closeBtnMain = screen.getByTestId('close btn main');
    expect(closeBtnMain).toBeInTheDocument();

    const skillsText = screen.getByText(/skills/i);
    expect(skillsText).toBeInTheDocument();

    const { container } = renderWithProviders(
      <MembersActiveSkills
        filteredTags={filteredTags}
        setIsTagsOpen={setIsTagsOpen}
        skills={skillsData}
        username="Anish"
        isSkillsLoading={true}
      />,
    );
    expect(container).toBeInTheDocument();
  });

  test('should render tagsModal when add tag button is clicked', async () => {
    const onClose = jest.fn();
    const setIsTagsOpen = jest.fn();
    const setSearchTags = jest.fn();
    const closeModal = jest.fn();

    renderWithProviders(
      <MembersSkillUpdateModalPresentation onClose={onClose} isOpen={true} />,
    );

    const { container } = renderWithProviders(
      <MembersActiveSkills
        filteredTags={filteredTags}
        setIsTagsOpen={setIsTagsOpen}
        skills={skillsData}
        username="Anish"
        isSkillsLoading={true}
      />,
    );
    expect(container).toBeInTheDocument();

    const addButtonElement = screen.getByTestId('add icon');
    fireEvent.click(addButtonElement);
    expect(addButtonElement).toBeInTheDocument();

    const { container: tagModal } = renderWithProviders(
      <TagsMoadal
        filteredTags={filteredTags}
        searchTags=""
        setIsTagsOpen={setIsTagsOpen}
        setSearchTags={setSearchTags}
        username="Anish"
      />,
    );
    expect(tagModal).toBeInTheDocument();
  });
});
