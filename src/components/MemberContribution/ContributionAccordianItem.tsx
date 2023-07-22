import { RootState } from '@/src/store';
import { AccordionPanel, Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import DeliveryDetails from './DeliveryDetails';
import NextLink from 'next/link';
import { Button, Link } from '@chakra-ui/react';
import styles from './memberContribution.module.css';
import Image from 'next/image';

export default function ContributionAccordianItem({
  task,
  title,
  openTaskStatusUpdateModal,
}: {
  task: any;
  title: boolean;
  openTaskStatusUpdateModal: (taskId: string, isTaskNoteworthy: string) => void;
}) {
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

  const url = task?.featureUrl ? task?.featureUrl : task?.url;

  return (
    <AccordionPanel
      as='button'
      onMouseEnter={showSetting}
      onMouseLeave={hideSetting}
      pb={4}
      key={task.id}
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
          onClick={() => openTaskStatusUpdateModal(task.id, task.isNoteworthy)}
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
}
