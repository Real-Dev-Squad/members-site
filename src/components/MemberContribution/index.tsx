import React, { useState } from 'react';
import { Accordion } from '@chakra-ui/react';

<<<<<<< Updated upstream
import ContributionAccordion from './ContributionAccordian';
import { useDispatch, useSelector } from 'react-redux';
import { setIsTaskUpdateModalVisible } from '@/src/store/superUserOptions';
import { RootState } from '@/src/store';
=======
import ContributionAccordion from "./ContributionAccordian";
import { useDispatch } from "react-redux";
import { setIsTaskUpdateModalVisible } from "@/src/store/superUserOptions";
>>>>>>> Stashed changes

export default function MemberContributions({
  userContribution,
}: {
  userContribution: any;
}) {
  const { data } = userContribution;
  const { noteworthy: noteWorthyContributions, all } = data;
<<<<<<< Updated upstream
  const reduxDispatch = useDispatch()
=======
  const defaultIndexValue = noteWorthyContributions?.length !== 0 ? 0 : 2;
  const { NOTEWORTHY_CONTRIBUTION, ACTIVE_CONTRIBUTION, ALL_CONTRIBUTION } =
    ACCORDION_TEXT;
  const reduxDispatch = useDispatch();
>>>>>>> Stashed changes

  function openTaskStatusUpdateModal(taskId: string, isTaskNoteworthy: string) {
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
<<<<<<< Updated upstream
      boxShadow={'0 0 15px -7px rgba(0,0,0,.65)'}
      marginTop={'2rem'}
      width={'75%'}
      defaultIndex={[0]}
=======
      boxShadow={"0 0 15px -7px rgba(0,0,0,.65)"}
      defaultIndex={[defaultIndexValue]}
>>>>>>> Stashed changes
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
