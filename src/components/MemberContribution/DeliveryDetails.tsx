import React from "react";
import {
  isStatusNotVerified,
  isStatusVerified,
  taskTitleMissing,
} from "./memberContribution.util";
import { Box } from "@chakra-ui/react";

const STATUS_VERIFIED = "VERIFIED";
const ESTIMATED_COMPLETION = "Estimated Completion: ";
const COMPLETED_IN = "Completed in: ";
const FEATURE_LIVE_ON = "Feature live on";

// this component returns jsx for estimations and feature delivery
export default function DeliveryDetails(props: any) {
  const { title, task } = props;
  let timeStampComponent;

  if (title) {
    // checks if the task status is verified
    if (task.status !== STATUS_VERIFIED) {
      const data = isStatusVerified({ task });
      timeStampComponent = (
        <>
          <Box>
            <span>{ESTIMATED_COMPLETION}</span>
            <b>{data?.completionDuration}</b>
          </Box>
        </>
      );
    } else {
      // for all other cases
      const data = isStatusNotVerified({
        task,
      });

      timeStampComponent = (
        <>
          <Box>
            <span style={{ color: "#90a4ae" }}>{COMPLETED_IN}</span>
            <b>{data?.completionDuration}</b>
          </Box>
          <Box>
            <span style={{ color: "#90a4ae" }}>
              {FEATURE_LIVE_ON} {data?.displayFeatureLiveDate}
            </span>
          </Box>
        </>
      );
    }
  } else {
    const createdAt = +new Date(task.createdAt);
    const updatedAt = +new Date(task.updatedAt);

    if (task?.state === "closed") {
      const data = taskTitleMissing({
        createdAt,
        updatedAt,
      });

      timeStampComponent = (
        <>
          <Box>
            <span style={{ color: "#90a4ae" }}>{COMPLETED_IN}</span>
            <b>{data?.completionDuration}</b>
          </Box>
          <Box>
            <span style={{ color: "#90a4ae" }}>
              {FEATURE_LIVE_ON} {data?.displayFeatureLiveDate}
            </span>
          </Box>
        </>
      );
    }
  }
  return <>{timeStampComponent}</>;
}
