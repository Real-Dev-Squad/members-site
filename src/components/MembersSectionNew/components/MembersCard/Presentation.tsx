import { Box, Text, Flex, Image } from "@chakra-ui/react";

import Socials from "../Socials";

import { MemberType } from "../../types/MembersSection.type";

import styles from "./membersCard.module.css";
import SettingButton from "../../../SettingButton/SettingButton";
import { SyntheticEvent } from "react";

export default function MembersCardPresentation({
  member,
  openSkillUpdateModal,
  openRoleUpdateModal,
  shouldShowSetting,
  hideSetting,
  showSetting,
  routeHandler,
  isSuperUser,
}: {
  member: MemberType;
  openSkillUpdateModal: (e: SyntheticEvent) => void;
  openRoleUpdateModal: (e: SyntheticEvent) => void;
  shouldShowSetting: boolean;
  hideSetting: () => void;
  showSetting: () => void;
  routeHandler: () => void;
  isSuperUser: boolean;
}) {
  const imageToShow = member?.picture?.url || "/images/Avatar.png";
  return (
    <Box
      as="button"
      onMouseEnter={showSetting}
      onMouseLeave={hideSetting}
      onClick={routeHandler}
      className={styles.member_card}
      data-testId="member card button"
    >
      <Image
        className={styles.member_card__image}
        src={imageToShow}
        alt="Picture of the author"
      />
      <Box className={styles.member_card__info}>
        <Text as="h1" className={styles.member_card__username}>
          {`${member.first_name} ${member.last_name}`}
        </Text>
        <small
          data-testId="designation"
          className={styles.member_card__designation}
        >
          {member.designation}
        </small>
      </Box>
      <Flex
        data-testId="socials links"
        justify="center"
        className={styles.member_card__socials}
        gap={1}
      >
        {member?.twitter_id && (
          <Socials
            url={`https://twitter.com/${member.twitter_id}`}
            icon="/icons/icons8-twitter.svg"
            alt="twitter icon"
          />
        )}
        {member.github_id && (
          <Socials
            url={`https://github.com/${member.github_id}`}
            icon="/icons/icons8-github.svg"
            alt="github icon"
          />
        )}
        {member.linkedin_id && (
          <Socials
            url={`https://linkedin.com/in/${member.linkedin_id}`}
            icon="/icons/icons8-linkedin.svg"
            alt="linkedin icon"
          />
        )}
        {member.instagram_id && (
          <Socials
            url={`https://instagram.com/${member.instagram_id}`}
            icon="/icons/icons8-instagram.svg"
            alt="instagram icon"
          />
        )}
      </Flex>
      {shouldShowSetting && isSuperUser && (
        <SettingButton
          openRoleUpdateModal={openRoleUpdateModal}
          openSkillUpdateModal={openSkillUpdateModal}
        />
      )}
    </Box>
  );
}
