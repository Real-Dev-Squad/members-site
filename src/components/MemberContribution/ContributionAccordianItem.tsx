import { RootState } from "@/src/store";
import { AccordionPanel, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import DeliveryDetails from "./DeliveryDetails";
import NextLink from "next/link";
import { Button, Link } from "@chakra-ui/react";
import styles from "./memberContribution.module.css";
import Image from "next/image";
import { useGetIsSuperUser } from "@/src/utils/customHooks";

export default function ContributionAccordianItem({
  task,
  title,
  openTaskStatusUpdateModal,
}: {
  task: any;
  title: boolean;
  openTaskStatusUpdateModal: (taskId: string, isTaskNoteworthy: string) => void;
}) {
  const { featureUrl, url, title: taskTitle, purpose, id, isNoteworthy } = task;
  const { isOptionKeyPressed } = useSelector(
    (state: RootState) => state.keyboard
  );
  const isSuperUser = useGetIsSuperUser();
  const [shouldShowSetting, setShouldShowSetting] = useState<boolean>(false);

  function showSetting() {
    if (isOptionKeyPressed) setShouldShowSetting(true);
  }

  function hideSetting() {
    setShouldShowSetting(false);
  }

  return (
    <Box
      as="button"
      onMouseEnter={showSetting}
      onMouseLeave={hideSetting}
      pb={4}
      className={styles.memberContribution_wrapper}
    >
      <h3 className={styles.memberContribution_taskHeading}>{taskTitle}</h3>
      <Text mt={"0.4rem"} mb={"0.2rem"} color={"#636363"}>
        {purpose}
      </Text>
      <DeliveryDetails title={title} task={task} />
      <Box display={"flex"} justifyContent={"center"} mt={"0.5rem"}>
        {url && (
          <Link
            as={NextLink}
            href={`${featureUrl || url}`}
            color={"#a39797"}
            className={styles.memberContribution_link}
            fontWeight={400}
          >
            Check out this feature in action
          </Link>
        )}
      </Box>
      {id && shouldShowSetting && isSuperUser && (
        <Button
          onClick={() => openTaskStatusUpdateModal(id, isNoteworthy)}
          position="absolute"
          top="0"
          right="-10px"
          background="none"
          _hover={{ bg: "none" }}
        >
          <Image src="/icons/setting.svg" alt="" width={15} height={15} />
        </Button>
      )}
    </Box>
  );
}
