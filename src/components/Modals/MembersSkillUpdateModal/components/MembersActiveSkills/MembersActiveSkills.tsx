import {
  Wrap,
  WrapItem,
  Text,
  Button,
  Skeleton,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, AddIcon } from "@chakra-ui/icons";
import { useRemoveSkillsMutation } from "@/src/services/serverApi";
import {
  skillsType,
  tagsWithLevelType,
} from "@/src/components/Modals/MembersSkillUpdateModal/types/memberSkills";
import styles from "./membersActiveSkills.module.css";

export default function MembersActiveSkills({
  filteredTags,
  setIsTagsOpen,
  skills,
  username,
  isSkillsLoading,
}: {
  filteredTags: tagsWithLevelType[];
  setIsTagsOpen: (value: any) => void;
  skills: skillsType[];
  username: string | null;
  isSkillsLoading: boolean;
}) {
  const [removeSkills, { isLoading: isRemoveSkillLoading }] =
    useRemoveSkillsMutation();

  return (
    <Skeleton height="80%" isLoaded={!isSkillsLoading}>
      <Wrap className={styles.memberActiveSkills_modal_wrap} spacing="1rem">
        {skills?.map((skill: skillsType, idx: number) => {
          return (
            <>
                <Skeleton key={skill.id} isLoaded={!isRemoveSkillLoading}>
                  <WrapItem
                    className={styles.memberActiveSkills_modal_wrapItem}
                    role="group"
                  >
                    <Text
                      className={styles.memberActiveSkills_skill_name}
                      _groupHover={{ backgroundColor: "#c5fceb" }}
                    >
                      {skill.tagName} level {skill.levelName}
                    </Text>
                    <Button
                      onClick={() => {
                        removeSkills({
                          tagId: `${skill.tagId}`,
                          itemId: `${username}`,
                        });
                      }}
                      _groupHover={{ visibility: "visible" }}
                      sx={{
                        minWidth: "none",
                      }}
                      className={styles.memberActiveSkills_skill_delete_button}
                    >
                      <CloseIcon
                        className={styles.memberActiveSkills_close_icon}
                      />
                    </Button>
                  </WrapItem>
                </Skeleton>
            </>
          );
        })}
        {filteredTags?.length !== 0 && (
          <WrapItem>
            <IconButton
              className={styles.memberActiveSkills_add_icon_button}
              onClick={() => setIsTagsOpen((prevstate: boolean) => !prevstate)}
              aria-label="Add skills"
              icon={<AddIcon className={styles.memberActiveSkills_add_icon} />}
            />
          </WrapItem>
        )}
      </Wrap>
    </Skeleton>
  );
}
