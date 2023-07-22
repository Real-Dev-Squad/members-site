import NextLink from 'next/link';
import { Button, Link } from '@chakra-ui/react';
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
  openTaskStatusUpdateModal,
}: {
  accordionTitle: string;
  contribution: any;
  openTaskStatusUpdateModal: (taskId: string, isTaskNoteworthy: string) => void;
}) {
  const renderData = contribution?.map((data: any, idx: number) => {
    const task =
      Object.keys(data?.task)?.length > 0 ? data?.task : data?.prList[0];

    // title exist boolean
    const title = !!data?.task?.title;

    return (
      <ContributionAccordianItem
        task={task}
        key={task.id}
        title={title}
        openTaskStatusUpdateModal={openTaskStatusUpdateModal}
      />
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
