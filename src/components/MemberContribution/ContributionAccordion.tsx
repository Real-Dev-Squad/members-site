import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import styles from "./memberContribution.module.css";
import { calculateTimeStamp } from "./memberContribution.util";

export default function ContributionAccordion({
  accordionTitle,
  contribution,
}: {
  accordionTitle: string;
  contribution: any;
}) {

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
      {contribution.map((data: any, idx:number) => {

        const task =
          Object.keys(data.task).length > 0 ? data.task : data.prList[0];
        
          const estimatedDate =
          calculateTimeStamp(task.startedOn, task.endsOn) ?? "NA";

        return (
          <>
            <AccordionPanel pb={4} key={idx}>
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
              <Box>
                <span>Estimated Completion: </span>
                <b>{estimatedDate}</b>
              </Box>
              <Box display={"flex"} justifyContent={"center"} mt={"0.5rem"}>
                <Link
                  as={NextLink}
                  href="/home"
                  color={"#a39797"}
                  className={styles.memberContribution_link}
                  fontWeight={400}
                >
                  Check out this feature in action
                </Link>
              </Box>
            </AccordionPanel>
          </>
        );
      })}
    </AccordionItem>
  );
}
