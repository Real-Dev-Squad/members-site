import React from "react";
import ContributionAccordion from "./ContributionAccordion";
import { Accordion } from "@chakra-ui/react";

export default function MemberContributions({
  userContribution,
}: {
  userContribution: any;
}) {
  const { data } = userContribution;
  const { noteworthy: noteWorthyContributions, all } = data;

  return (
    <Accordion
      boxShadow={"0 0 15px -7px rgba(0,0,0,.65)"}
      marginTop={"2rem"}
      width={"75%"}
      defaultIndex={[0]}
      allowMultiple={true}
    >
      <ContributionAccordion
        accordionTitle={"Noteworthy Contribution"}
        contribution={noteWorthyContributions}
      />

      <ContributionAccordion
        accordionTitle={"All Contribution"}
        contribution={all}
      />

      {/* <ContributionAccordion
        data1={"Noteworthy contributions"}
        data2={"Make Real Dev Squad work!"}
        data3={"Make it work"}
        data4={"Estimated Completion"}
        data5={"11 months"}
      />

      <ContributionAccordion
        data1={"Active tasks"}
        data2={"Make Real Dev Squad work!"}
        data3={"Make it work"}
        data4={"Estimated Completion"}
        data5={"11 months"}
      />

      <ContributionAccordion
        data1={"All contributions"}
        data2={"Make Real Dev Squad work!"}
        data3={"Make it work"}
        data4={"Estimated Completion"}
        data5={"11 months"}
      /> */}
    </Accordion>
  );
}
