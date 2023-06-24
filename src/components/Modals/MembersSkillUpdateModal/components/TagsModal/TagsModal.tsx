import { Box, Input, IconButton, CloseButton, Wrap, WrapItem, Button } from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { tagPayload, tagsWithLevelType } from "@/src/components/Modals/MembersSkillUpdateModal/types/memberSkills";
import styles from "./tagsModal.module.css";
import { MutableRefObject, useRef } from "react";

export default function TagsMoadal ({
  setIsTagsOpen,
  searchTags,
  setSearchTags,
  filteredTags,
  username,
  addNewSkill
} : {
  setIsTagsOpen: (value: boolean) => void;
  searchTags: string;
  setSearchTags: (value: string) => void;
  filteredTags: tagsWithLevelType[];
  username: string | null;
  addNewSkill: (payload: tagPayload) => void;
}) {
  
    const inputRef = useRef<HTMLInputElement>(null);

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
                      outline: 'none',
                    }}
                    ref={inputRef}
                    onChange={(e) => setSearchTags(e.target.value)}
                    sx={{
                      border: 'none',
                      outline: 'none',
                    }}
                    placeholder='Skill'
                    size='xs'
                  />
                  {searchTags === '' ? (
                    <IconButton
                      sx={{
                        height: '0',
                        minWidth: '0',
                        marginRight: '5px',
                      }}
                      aria-label='Search skills'
                      icon={
                        <SearchIcon />
                      }
                    />
                  ) : (
                    <IconButton
                      onClick={() => {
                        setSearchTags('');
                        if(inputRef.current !== null) inputRef.current.value = '';
                      }}
                      sx={{
                        height: '0',
                        minWidth: '0',
                        marginRight: '5px',
                      }}
                      aria-label='Search skills'
                      icon={
                        <CloseIcon
                          sx={{
                            width: '0.75rem',
                            height: '0.75rem',
                          }}
                        />
                      }
                    />
                  )}
                </Box>
                <Wrap
                  spacing='0'
                  sx={{
                    flexDirection: 'column',
                    marginTop: '0.7rem',
                  }}
                >
                  {filteredTags?.map((tag: tagsWithLevelType, idx: number) => {
                    return (
                      <WrapItem
                        key={idx}
                        sx={{
                          alignItems: 'center',
                        }}
                        _hover={{ backgroundColor: '#e5e7eb' }}
                        className={styles.wrapItem_skill}
                      >
                        <Box className={styles.dot}></Box>
                        <Button
                          onClick={() => {
                            setIsTagsOpen(false);
                            setSearchTags('');
                            addNewSkill({
                              itemId: `${username}`,
                              itemType: 'USER',
                              tagPayload: [{
                                tagId: `${tag.tagId}`,
                                levelId: `${tag.levelId}`
                              }]
                            })
                            if(inputRef.current !== null) inputRef.current.value = '';
                          }}
                          sx={{
                            height: '100%',
                            width: '100%',
                            padding: '0',
                            fontSize: '13px',
                            justifyContent: 'flex-start',
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