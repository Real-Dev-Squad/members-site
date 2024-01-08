import { filteredTagsData } from '../../services/serverApi'

import { skillsData } from '../../mocks/db/skills'
import { tagsWithLevel } from '../../mocks/db/tagsWithLevels'
import { filteredTags } from '../../mocks/db/filteredTags'

describe('filteredTagData', () => {
  const result: Array<any> = []

  test('should return skills with filter value based on search and active skills', () => {
    const data = filteredTagsData(tagsWithLevel, skillsData, 'DEBUGGING 9')
    expect(data).not.toBeUndefined()
    expect(data).toEqual(result)
  })

  test('should returns active skills if no search value is provided', () => {
    const data = filteredTagsData(tagsWithLevel, skillsData, '')
    expect(data).not.toBeUndefined()
    expect(data).toEqual(filteredTags)
  })
})
