import React from 'react';
import { Accordion } from '@chakra-ui/react';

import ContributionAccordion from './ContributionAccordian';
import { useDispatch } from 'react-redux';
import { setIsTaskUpdateModalVisible } from '@/src/store/superUserOptions';

export default function MemberContributions({
  userContribution,
}: {
  userContribution: any;
}) {
  const { data } = userContribution;
  const { noteworthy: noteWorthyContributions, all } = data;
  const reduxDispatch = useDispatch()

  function openTaskStatusUpdateModal(taskId: string, isTaskNoteworthy: string) {
    console.log('hello', taskId, isTaskNoteworthy)
    reduxDispatch(
      setIsTaskUpdateModalVisible({
        visibility: true,
        taskId,
        isTaskNoteworthy,
      })
    );
  }

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
        openTaskStatusUpdateModal={openTaskStatusUpdateModal}
      />

      <ContributionAccordion
        accordionTitle={'All Contribution'}
        contribution={all}
        openTaskStatusUpdateModal={openTaskStatusUpdateModal}
      />
    </Accordion>
  );
}
