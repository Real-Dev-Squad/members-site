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
    const { isOptionKeyPressed } = useSelector(
      (state: RootState) => state.keyboard
    );
    const [shouldShowSetting, setShouldShowSetting] = useState<boolean>(false);

    function showSetting() {
      if (isOptionKeyPressed) setShouldShowSetting(true);
    }

    function hideSetting() {
      setShouldShowSetting(false);
    }

    // title exist boolean
    const title = !!data?.task?.title;

    const url = task?.featureUrl ? task?.featureUrl : task?.url;
    

    return (
      <AccordionPanel
        as='button'
        onMouseEnter={showSetting}
        onMouseLeave={hideSetting}
        pb={4}
        key={idx}
        sx={{ position: 'relative' }}
      >
        <h3
          style={{
            color: '#041187',
            fontSize: '1.4rem',
            fontWeight: '400',
          }}
        >
          {task?.title}
        </h3>
        <Text mt={'0.4rem'} mb={'0.2rem'} color={'#636363'}>
          {task?.purpose}
        </Text>
        <DeliveryDetails title={title} task={task} />
        <Box display={'flex'} justifyContent={'center'} mt={'0.5rem'}>
          {url && (
            <Link
              as={NextLink}
              href={`${url}`}
              color={'#a39797'}
              className={styles.memberContribution_link}
              fontWeight={400}
            >
              Check out this feature in action
            </Link>
          )}
        </Box>
        {task.id && shouldShowSetting && (
          <Button
            onClick={() =>
              openTaskStatusUpdateModal(task.id, task.isNoteworthy)
            }
            position='absolute'
            top='0'
            right='-10px'
            background='none'
            _hover={{ bg: 'none' }}
          >
            <Image src='/icons/setting.svg' alt='' width={15} height={15} />
          </Button>
        )}
      </AccordionPanel>
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
