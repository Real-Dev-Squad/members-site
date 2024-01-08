import { render } from '@testing-library/react'
import React from 'react'
import NewMembersCard from './../../../../../src/components/NewMember/index'

describe('NewMembersCard', () => {
  it('renders the component', () => {
    const newMemberFirstName = 'Sunny'
    const newMemberLastName = 'Kumar'
    const newMemberImageSrc = '/../../../public/images/Avatar.png'

    const { container } = render(
      <NewMembersCard
        newMemberFirstName={newMemberFirstName}
        newMemberLastName={newMemberLastName}
        newMemberImageSrc={newMemberImageSrc}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
