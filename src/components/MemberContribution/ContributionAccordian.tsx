import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react';

import ContributionAccordianItem from './ContributionAccordianItem';

// TODO: find a better way of doing this I dont even know why did i write this at that point
const setData = (data: any) => {
  if (data.status === 'IN_PROGRESS') {
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
  openTaskStatusUpdateModal,
}: {
  fallBackLabel?: string;
  accordionTitle: string;
  contribution: any;
  openTaskStatusUpdateModal?: (
    taskId: string,
    isTaskNoteworthy: string,
  ) => void;
}) {
  const renderData = contribution?.map((data: any, idx: number) => {
    const task = setData(data);
    // title exist boolean
    const isTitle =
      accordionTitle === 'Active tasks'
        ? !data?.task?.title
        : !!data?.task?.title;

    return (
      <>
        <ContributionAccordianItem
          task={task}
          key={idx}
          isTitle={isTitle}
          openTaskStatusUpdateModal={openTaskStatusUpdateModal!}
        />
        <hr
          style={{
            border: '1px solid hsla(0,0%,90%,.557)',
          }}
        />
      </>
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
