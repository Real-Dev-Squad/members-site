import React from 'react';
import { Box } from '@chakra-ui/react';

import {
  isStatusNotVerified,
  isStatusVerified,
  taskTitleMissing,
} from './memberContribution.util';
import { MEMBER_CONTRIBUTION } from './MemberContribution.constant';

// this component returns jsx for estimations and feature delivery
export default function DeliveryDetails(props: any) {
  const { title, task } = props;
  const {
    STATUS_VERIFIED,
    ESTIMATED_COMPLETION,
    COMPLETED_IN,
    FEATURE_LIVE_ON,
  } = MEMBER_CONTRIBUTION;

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
            <span style={{ color: '#90a4ae' }}>{COMPLETED_IN}</span>
            <b>{data?.completionDuration}</b>
          </Box>
          <Box>
            <span style={{ color: '#90a4ae' }}>
              {FEATURE_LIVE_ON} {data?.displayFeatureLiveDate}
            </span>
          </Box>
        </>
      );
    }
  } else {
    const createdAt = +new Date(task.createdAt);
    const updatedAt = +new Date(task.updatedAt);

    if (task?.state === 'closed') {
      const data = taskTitleMissing({
        createdAt,
        updatedAt,
      });

      timeStampComponent = (
        <>
          <Box>
            <span style={{ color: '#90a4ae' }}>{COMPLETED_IN}</span>
            <b>{data?.completionDuration}</b>
          </Box>
          <Box>
            <span style={{ color: '#90a4ae' }}>
              {FEATURE_LIVE_ON} {data?.displayFeatureLiveDate}
            </span>
          </Box>
        </>
      );
    }
  }
  return <>{timeStampComponent}</>;
}
