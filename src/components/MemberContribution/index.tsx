import React, { useState } from "react";
import { Accordion } from "@chakra-ui/react";

import ContributionAccordion from "./ContributionAccordian";
import { ACCORDION_TEXT } from "./memberContribution.constant";

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
      />
    </Accordion>
  );
}
