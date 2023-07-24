import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";

import DeliveryDetails from "./DeliveryDetails";

import styles from "./memberContribution.module.css";

// TODO: find a better way of doing this I dont even know why did i write this at that point
const setData = (data: any) => {
  if (data.status === "IN_PROGRESS") {
    // this condition returns usersActiveTask data
    return data;
  } else if (Object?.keys(data?.task)?.length > 0) {
    // this returns data if the task length is greater than 0
    // could be noteworthy or all contri
    return data?.task;
  } else {
    // if task.length is not greater than zero
    return data?.prList[0];
  }
};
export default function ContributionAccordion({
  accordionTitle,
  contribution,
  fallBackLabel,
}: {
  accordionTitle: string;
  contribution: any;
  fallBackLabel?: string;
}) {
  const renderData = contribution?.map((data: any, idx: number) => {
    const task = setData(data);
    // title exist boolean
    const title = !!data?.task?.title;

    const url = task?.featureUrl ? task?.featureUrl : task?.url;

    return (
      <Box key={idx} margin={idx !== 0 ? "24px 0" : "0"}>
        <h3
          style={{
            color: "#041187",
            fontSize: "1.4rem",
            fontWeight: "400",
          }}
        >
          {task?.title}
        </h3>
        <Text mt={"0.4rem"} mb={"0.2rem"} color={"#636363"}>
          {task?.purpose}
        </Text>
        <DeliveryDetails title={title} task={task} />
        <Box display={"flex"} justifyContent={"center"} mt={"0.5rem"}>
          {url && (
            <Link
              as={NextLink}
              href={`${url}`}
              color={"#a39797"}
              className={styles.memberContribution_link}
              fontWeight={400}
            >
              Check out this feature in action
            </Link>
          )}
        </Box>
      </Box>
    );
  });

  return (
    <AccordionItem
      sx={{
        borderBottom: "1px solid #c7c7c7",
      }}
    >
      <h2>
        <AccordionButton>
          <Box
            fontSize={"2rem"}
            fontWeight={"500"}
            as="span"
            flex="1"
            textAlign="left"
          >
            {accordionTitle}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        {renderData.length !== 0 ? renderData : fallBackLabel}
      </AccordionPanel>
    </AccordionItem>
  );
}
