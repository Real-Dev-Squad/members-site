import { Wrap, WrapItem, Text, Button, Skeleton, IconButton } from "@chakra-ui/react";
import { CloseIcon, AddIcon } from "@chakra-ui/icons";
import { useGetSkillsQuery, useRemoveSkillsMutation } from "../../tagsApi";
import { skillsType, tagsWithLevelType } from "@/src/components/Modals/MembersSkillUpdateModal/types/memberSkills";
import styles from "./membersActiveSkills.module.css";

export default function MembersActiveSkills ({ filteredTags, setIsTagsOpen, skills, username } : {
  filteredTags: tagsWithLevelType[];
  setIsTagsOpen: (value: any) => void;
  skills: skillsType[];
  username: string;
}) {
    const { isLoading } = useGetSkillsQuery();
    const [ removeSkills, { isLoading: removeSkillIsLoading } ] = useRemoveSkillsMutation();

    return (
        <Skeleton height="80%" isLoaded = {!isLoading}>
        <Wrap
            spacing="1rem"
            sx={{
              margin: "1rem 0.43rem",
              overflow: "visible",
            }}
          >
            {
            skills?.map((skill: skillsType, idx: number) => {
              return (
                <>
                <Skeleton key = {skill.id} isLoaded = {!removeSkillIsLoading}>
                <WrapItem
                  role="group"
                  sx={{
                    position: "relative",
                  }}
                >
                  <Text
                    _groupHover={{ backgroundColor: "#c5fceb" }}
                    className={styles.memberSkillModal_skill}
                  >
                    {skill.tagName} level {skill.levelName}
                  </Text>
                  <Button
                    onClick={() => {
                      removeSkills({
                        tagId: `${skill.tagId}`,
                        itemId: `${username}`
                      })
                    }}
                    _groupHover={{ visibility: "visible" }}
                    sx={{
                      position: "absolute",
                      height: "17px",
                      padding: "2px",
                      lineHeight: "18px",
                      borderRadius: "50px",
                      minWidth: "none",
                    }}
                    className={styles.skill_delete_btn}
                  >
                    <CloseIcon
                      sx={{
                        width: "19px",
                        height: "8px",
                      }}
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
                  onClick={() => setIsTagsOpen((prevstate: boolean) => !prevstate)}
                  sx={{
                    height: "100%",
                  }}
                  aria-label="Add skills"
                  icon={
                    <AddIcon
                      sx={{
                        width: "1rem",
                        height: "1rem",
                      }}
                    />
                  }
                />
              </WrapItem>
            )}
          </Wrap>
          </Skeleton>
    )
}