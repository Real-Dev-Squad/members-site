import React, { useState } from 'react';
import { Accordion } from '@chakra-ui/react';

import ContributionAccordion from './ContributionAccordian';

export default function MemberContributions({
  userContribution,
  userActiveTask
}: {
  userContribution: any;
  userActiveTask:any
}) {
  const { data } = userContribution;
  const { noteworthy: noteWorthyContributions, all } = data;
  const defaultIndexValue = noteWorthyContributions.length !== 0 ? 0:2

  return (
    <Accordion
      boxShadow={'0 0 15px -7px rgba(0,0,0,.65)'}
      marginTop={'2rem'}
      width={'75%'}
      defaultIndex={[defaultIndexValue]}
      allowMultiple={true}
    >
      <ContributionAccordion
        accordionTitle={'Noteworthy Contribution'}
        contribution={noteWorthyContributions}
        fallBackLabel={"No noteworthy contributions found 😢"}
      />
       <ContributionAccordion
        accordionTitle={'Active tasks'}
        contribution={userActiveTask}
       fallBackLabel={"No active contributions found 😢"}
      />
      <ContributionAccordion
        accordionTitle={'All Contribution'}
        contribution={all}
        fallBackLabel={"How is this person a member? 🤔"}
      />
    </Accordion>
  );
}
