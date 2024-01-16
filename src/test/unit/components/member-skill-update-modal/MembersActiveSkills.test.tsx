import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../test__utils/renderWithProvides';
import { filteredTags } from '../../../../mocks/db/filteredTags';
import { skillsData } from '../../../../mocks/db/skills';

import MembersActiveSkills from '../../../../components/Modals/MembersSkillUpdateModal/components/MembersActiveSkills/MembersActiveSkills';
import Skills from '../../../../components/Modals/MembersSkillUpdateModal/components/MembersActiveSkills/Skills';

describe('MembersActiveSkills', () => {
  test('should renders correctly', () => {
    const setIsTagsOpen = jest.fn();

    renderWithProviders(
      <MembersActiveSkills
        filteredTags={filteredTags}
        setIsTagsOpen={setIsTagsOpen}
        skills={skillsData}
        username="Anish"
        isSkillsLoading={true}
      />,
    );

    const { container } = renderWithProviders(
      <Skills skills={skillsData} username="Anish" />,
    );

    const activeSkillsList = screen.getByTestId('active skills');
    expect(activeSkillsList).toBeInTheDocument();
    expect(container).toBeInTheDocument();

    const addButtonElement = screen.getByTestId('add icon');
    fireEvent.click(addButtonElement);
    expect(addButtonElement).toBeInTheDocument();
  });
});
