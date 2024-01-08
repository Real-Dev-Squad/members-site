import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../../../../test__utils/renderWithProvides'
import { skillsData } from '../../../../mocks/db/skills'

import Skills from '../../../../components/Modals/MembersSkillUpdateModal/components/MembersActiveSkills/Skills'

describe('Skills', () => {
  test('renders correctly', () => {
    renderWithProviders(<Skills skills={skillsData} username="Anish" />)

    const skillsList = screen.getAllByRole('group')
    expect(skillsList).toHaveLength(skillsData.length)

    const closeButton = screen.getAllByRole('button')
    fireEvent.click(closeButton[0])
    expect(closeButton).toHaveLength(skillsData.length)
  })
})
