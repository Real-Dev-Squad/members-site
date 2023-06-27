import {
  Box,
  Input,
  IconButton,
  CloseButton,
  Wrap,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  tagPayload,
  tagsWithLevelType,
} from "@/src/components/Modals/MembersSkillUpdateModal/types/memberSkills";
import styles from "./tagsModal.module.css";
import { MutableRefObject, useRef } from "react";

export default function TagsMoadal({
  setIsTagsOpen,
  searchTags,
  setSearchTags,
  filteredTags,
  username,
  addNewSkill,
}: {
  setIsTagsOpen: (value: boolean) => void;
  searchTags: string;
  setSearchTags: (value: string) => void;
  filteredTags: tagsWithLevelType[];
  username: string | null;
  addNewSkill: (payload: tagPayload) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box onClick={() => setIsTagsOpen(false)} className={styles.bg_gray}>
      <Box
        onClick={(e) => e.stopPropagation()}
        className={styles.skills_container}
      >
        <Box className={styles.skills_search_box}>
          <Input
            className={styles.skills_input_search}
            _focusVisible={{
              outline: "none",
            }}
            ref={inputRef}
            onChange={(e) => setSearchTags(e.target.value)}
            placeholder="Skill"
            size="xs"
          />
          {searchTags === "" ? (
            <IconButton
              className={styles.skills_search_icon_button}
              sx={{
                minWidth: "0",
              }}
              aria-label="Search skills"
              icon={<SearchIcon />}
            />
          ) : (
            <IconButton
              className={styles.skills_search_icon_button}
              onClick={() => {
                setSearchTags("");
                if (inputRef.current !== null) inputRef.current.value = "";
              }}
              sx={{
                minWidth: "0",
              }}
              aria-label="Search skills"
              icon={<CloseIcon className={styles.skills_search_close_icon} />}
            />
          )}
        </Box>
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
                  onClick={() => {
                    setIsTagsOpen(false);
                    setSearchTags("");
                    addNewSkill({
                      itemId: `${username}`,
                      itemType: "USER",
                      tagPayload: [
                        {
                          tagId: `${tag.tagId}`,
                          levelId: `${tag.levelId}`,
                        },
                      ],
                    });
                    if (inputRef.current !== null) inputRef.current.value = "";
                  }}
                >
                  {tag.name}
                </Button>
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>
    </Box>
  );
}
