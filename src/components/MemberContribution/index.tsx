import React from 'react';
import { Accordion } from '@chakra-ui/react';

import ContributionAccordion from './ContributionAccordian';

export default function MemberContributions({
  userContribution,
}: {
  userContribution: any;
}) {
  const { data } = userContribution;
  const { noteworthy: noteWorthyContributions, all } = data;

  return (
    <Accordion
      boxShadow={'0 0 15px -7px rgba(0,0,0,.65)'}
      marginTop={'2rem'}
      width={'75%'}
      defaultIndex={[0]}
      allowMultiple={true}
    >
      <ContributionAccordion
        accordionTitle={'Noteworthy Contribution'}
        contribution={noteWorthyContributions}
      />

      <ContributionAccordion
        accordionTitle={'All Contribution'}
        contribution={all}
      />
    </Accordion>
  );
}
