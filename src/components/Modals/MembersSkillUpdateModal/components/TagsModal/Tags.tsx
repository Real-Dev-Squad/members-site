import { Box, Wrap, WrapItem, Button } from "@chakra-ui/react";

// import { useUpdateUsersSKillMutation } from "@/src/services/serverApi";
import { useUpdateUsersSKillMutation } from "../../../../../services/serverApi";
import { RefObject } from "react";

import { tagsWithLevelType } from "../../types/memberSkills";

import styles from "./tagsModal.module.css";

export default function Tags({
  filteredTags,
  username,
  inputRef,
  setSearchTags,
  setIsTagsOpen,
}: {
  filteredTags: tagsWithLevelType[];
  username: string | null;
  inputRef: RefObject<HTMLInputElement>;
  setSearchTags: (value: string) => void;
  setIsTagsOpen: (value: boolean) => void;
}) {
  const [updateUserSkill] = useUpdateUsersSKillMutation();

  const addNewSkill = (username: string | null, tag: tagsWithLevelType) => {
    setIsTagsOpen(false);
    setSearchTags("");
    updateUserSkill({
      itemId: `${username}`,
      itemType: "USER",
      tagId: tag.tagId,
      levelId: tag.levelId,
      tagType: tag.tagType,
      levelName: tag.levelName,
      tagName: tag.tagName,
      levelValue: tag.levelValue,
    });
    //if (inputRef.current !== null) inputRef.current.value = "";
  };

  return (
    <Wrap className={styles.skills_wrap} spacing="0">
      {filteredTags?.map((tag: tagsWithLevelType, idx: number) => {
        return (
          <WrapItem
            className={styles.skills_wrapItem}
            key={idx}
            _hover={{ backgroundColor: "#e5e7eb" }}
          >
            <Box className={styles.dot}></Box>
            <Button
              className={styles.skills_add_button}
              onClick={() => addNewSkill(username, tag)}
            >
              {tag.name}
            </Button>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
