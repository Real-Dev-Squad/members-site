import { WrapItem, Text, Button, Skeleton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import { useRemoveSkillsMutation } from "../../../../../services/serverApi";

import { skills } from "../../types/memberSkills";

import styles from "./membersActiveSkills.module.css";
import { notifyError, notifySuccess } from "../../../../../utils/toast";

export default function Skills({
  username,
  skills,
}: {
  username: string | null;
  skills: skills[];
}) {
  const [removeSkills, { isLoading: isRemoveSkillLoading }] =
    useRemoveSkillsMutation();

  return (
    <>
      {skills?.map((skill: skills, idx: number) => {
        return (
          <Skeleton key={skill.id} isLoaded={!isRemoveSkillLoading}>
            <WrapItem
              className={styles.memberActiveSkills_modal_wrapItem}
              role="group"
              key={idx}
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
                  })
                    .unwrap()
                    .then(() => {
                      notifySuccess('Skill removed successfully');
                    })
                    .catch((error) => {
                      const errorMessage =
                        error?.data?.message || 'Something went wrong!';
                      notifyError(errorMessage);
                    });
                }}
                _groupHover={{ visibility: "visible" }}
                sx={{
                  minWidth: "none",
                }}
                className={styles.memberActiveSkills_skill_delete_button}
              >
                <CloseIcon className={styles.memberActiveSkills_close_icon} />
              </Button>
            </WrapItem>
          </Skeleton>
        );
      })}
    </>
  );
}
