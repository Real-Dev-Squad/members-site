import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";

import Socials from "../Socials";

import { MemberType } from "../../types/MembersSection.type";

import styles from "./membersCard.module.css";
import SettingButton from "../../../SettingButton/SettingButton";

export default function MembersCardPresentation({
  member,
  openSkillUpdateModal,
  openRoleUpdateModal,
  shouldShowSetting,
  hideSetting,
  showSetting,
  routeHandler,
}: {
  member: MemberType;
  openSkillUpdateModal: () => void;
  openRoleUpdateModal: () => void;
  shouldShowSetting: boolean;
  hideSetting: () => void;
  showSetting: () => void;
  routeHandler: () => void;
}) {
  const imageToShow = member?.picture?.url || "/images/Avatar.png";
  return (
    <Box
      as="button"
      onMouseEnter={showSetting}
      onMouseLeave={hideSetting}
      onClick={routeHandler}
      className={styles.member_card}
    >
      <Box className={styles.member_card__image_container}>
        <Image
          className={styles.member_card__image}
          src={imageToShow}
          alt="Picture of the author"
          fill
        />
      </Box>
      <Text as="h1" className={styles.member_card__username}>
        {`${member.first_name} ${member.last_name}`}
      </Text>
      <Flex justify="center" className={styles.member_card__socials}>
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
      {shouldShowSetting && (
        <SettingButton
          openRoleUpdateModal={openRoleUpdateModal}
          openSkillUpdateModal={openSkillUpdateModal}
        />
      )}
    </Box>
  );
}
