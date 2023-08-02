import React, { useState } from "react";
import { Accordion } from "@chakra-ui/react";

import { ACCORDION_TEXT } from "./memberContribution.constant";

import ContributionAccordion from './ContributionAccordian';
import { useDispatch, } from 'react-redux';
import { setIsTaskUpdateModalVisible } from '@/src/store/superUserOptions';

export default function MemberContributions({
  userContribution,
  userActiveTask,
}: {
  userContribution: any;
  userActiveTask: any;
}) {
  const { data } = userContribution;
  const { noteworthy: noteWorthyContributions, all } = data;
  const defaultIndexValue = noteWorthyContributions?.length !== 0 ? 0 : 2;
  const { NOTEWORTHY_CONTRIBUTION, ACTIVE_CONTRIBUTION, ALL_CONTRIBUTION } =
    ACCORDION_TEXT;
  const reduxDispatch = useDispatch()

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
      boxShadow={"0 0 15px -7px rgba(0,0,0,.65)"}
      marginTop={"2rem"}
      width={"75%"}
      defaultIndex={[defaultIndexValue]}
      allowMultiple={true}
    >
      <ContributionAccordion
        accordionTitle={NOTEWORTHY_CONTRIBUTION.PRIMARY_TEXT}
        contribution={noteWorthyContributions}
        fallBackLabel={NOTEWORTHY_CONTRIBUTION.FALLBACK_TEXT}
        openTaskStatusUpdateModal={openTaskStatusUpdateModal}
      />
      <ContributionAccordion
        accordionTitle={ACTIVE_CONTRIBUTION.PRIMARY_TEXT}
        contribution={userActiveTask}
        fallBackLabel={ACTIVE_CONTRIBUTION.FALLBACK_TEXT}
      />
      <ContributionAccordion
        accordionTitle={ALL_CONTRIBUTION.PRIMARY_TEXT}
        contribution={all}
        fallBackLabel={ALL_CONTRIBUTION.FALLBACK_TEXT}
        openTaskStatusUpdateModal={openTaskStatusUpdateModal}
      />
    </Accordion>
  );
}
