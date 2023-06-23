import { Box, Input, IconButton, CloseButton, Wrap, WrapItem, Button } from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { useAddNewSkillMutation, useUpdateUsersSkillMutation } from "../../tagsApi";
import { tagsWithLevelType } from "@/src/components/Modals/MembersSkillUpdateModal/types/memberSkills";
import styles from "./tagsModal.module.css";
import { MutableRefObject } from "react";

export default function TagsMoadal ({ setIsTagsOpen, searchTags, setSearchTags, filteredTags, inputRef, username } : {
    setIsTagsOpen: (value: boolean) => void;
    searchTags: string;
    setSearchTags: (value: string) => void;
    filteredTags: tagsWithLevelType[];
    inputRef: MutableRefObject<string>;
    username: string;
}) {
    const [ updateUsersSkill ] = useUpdateUsersSkillMutation();

    //console.log("custom fn caloig", updateUsersSkill("hey"));
    

    return (
        <Box
              onClick={() => setIsTagsOpen(false)}
              className={styles.bg_gray}
            >
              <Box
                onClick={(e) => e.stopPropagation()}
                className={styles.skills_container}
              >
                <Box className={styles.skill_search_box}>
                  <Input
                    _focusVisible={{
                      outline: "none",
                    }}
                    ref={inputRef}
                    onChange={(e) => setSearchTags(e.target.value)}
                    sx={{
                      border: "none",
                      outline: "none",
                    }}
                    placeholder="Skill"
                    size="xs"
                  />
                  {searchTags === "" ? (
                    <IconButton
                      sx={{
                        height: "0",
                        minWidth: "0",
                        marginRight: "5px",
                      }}
                      aria-label="Search skills"
                      icon={
                        <SearchIcon
                          sx={
                            {
                              // height: '1.1rem',
                              // width: '1.1rem'
                            }
                          }
                        />
                      }
                    />
                  ) : (
                    <IconButton
                      onClick={() => {
                        setSearchTags("");
                        inputRef.current.value = "";
                      }}
                      sx={{
                        height: "0",
                        minWidth: "0",
                        marginRight: "5px",
                      }}
                      aria-label="Search skills"
                      icon={
                        <CloseIcon
                          sx={{
                            width: "0.75rem",
                            height: "0.75rem",
                          }}
                        />
                      }
                    />
                  )}
                </Box>
                <Wrap
                  spacing="0"
                  sx={{
                    flexDirection: "column",
                    marginTop: "0.7rem",
                  }}
                >
                  {filteredTags?.map((tag: tagsWithLevelType, idx: number) => {
                    return (
                      <WrapItem
                        key={idx}
                        sx={{
                          alignItems: "center",
                        }}
                        _hover={{ backgroundColor: "#e5e7eb" }}
                        className={styles.wrapItem_skill}
                      >
                        <Box className={styles.dot}></Box>
                        <Button
                          onClick={() => {
                            setIsTagsOpen(false);
                            setSearchTags("");
                            updateUsersSkill({
                              itemId: `${username}`,
                              itemType: 'USER',
                              tagId: `${tag.tagId}`,
                              levelId: `${tag.levelId}`,
                              tagType: `${tag.tagType}`,
                              tagName: tag.tagName,
                              levelName: tag.levelName,
                              levelValue: tag.levelValue,
                            })
                            inputRef.current.value = "";
                          }}
                          sx={{
                            height: "100%",
                            width: "100%",
                            padding: "0",
                            fontSize: "13px",
                            justifyContent: "flex-start",
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
    )
}