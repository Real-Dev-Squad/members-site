<<<<<<< Updated upstream
import NextLink from 'next/link';
import { Button, Link } from '@chakra-ui/react';
=======
>>>>>>> Stashed changes
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react';

import DeliveryDetails from './DeliveryDetails';

import styles from './memberContribution.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { RootState } from '@/src/store';
import { useSelector } from 'react-redux';
import ContributionAccordianItem from './ContributionAccordianItem';

export default function ContributionAccordion({
  accordionTitle,
  contribution,
<<<<<<< Updated upstream
=======
  fallBackLabel,
>>>>>>> Stashed changes
  openTaskStatusUpdateModal,
}: {
  accordionTitle: string;
  contribution: any;
<<<<<<< Updated upstream
  openTaskStatusUpdateModal: (taskId: string, isTaskNoteworthy: string) => void;
=======
  openTaskStatusUpdateModal?: (
    taskId: string,
    isTaskNoteworthy: string
  ) => void;
>>>>>>> Stashed changes
}) {
  const renderData = contribution?.map((data: any, idx: number) => {
    const task =
      Object.keys(data?.task)?.length > 0 ? data?.task : data?.prList[0];

    // title exist boolean
    const title = !!data?.task?.title;

    return (
<<<<<<< Updated upstream
      <ContributionAccordianItem
        task={task}
        key={task.id}
        title={title}
        openTaskStatusUpdateModal={openTaskStatusUpdateModal}
      />
=======
      <>
        <ContributionAccordianItem
          task={task}
          key={idx}
          title={title}
          openTaskStatusUpdateModal={openTaskStatusUpdateModal!}
        />
        <hr
          style={{
            border: "1px solid hsla(0,0%,90%,.557)",
          }}
        />
      </>
>>>>>>> Stashed changes
    );
  });

  return (
    <AccordionItem
      sx={{
        borderBottom: '1px solid #c7c7c7',
      }}
    >
      <h2>
        <AccordionButton>
          <Box
            fontSize={'2rem'}
            fontWeight={'500'}
            as='span'
            flex='1'
            textAlign='left'
          >
            {accordionTitle}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      {renderData}
    </AccordionItem>
  );
}
