import { Wrap, WrapItem, Text, Button, Skeleton, IconButton } from "@chakra-ui/react";
import { CloseIcon, AddIcon } from "@chakra-ui/icons";
import { useRemoveSkillsMutation } from '@/src/services/serverApi'
import { skillsType, tagsWithLevelType } from "@/src/components/Modals/MembersSkillUpdateModal/types/memberSkills";
import styles from "./membersActiveSkills.module.css";

export default function MembersActiveSkills ({ filteredTags, setIsTagsOpen, skills, username, isAddSkillLoading, isSkillsLoading } : {
  filteredTags: tagsWithLevelType[];
  setIsTagsOpen: (value: any) => void;
  skills: skillsType[];
  username: string | null;
  isSkillsLoading: boolean;
  isAddSkillLoading: boolean;
}) {
    const [ removeSkills, { isLoading: isRemoveSkillLoading } ] = useRemoveSkillsMutation();

    return (
        <Skeleton height='80%' isLoaded = {!isSkillsLoading}>
        <Wrap
            spacing='1rem'
            sx={{
              margin: '1rem 0.43rem',
              overflow: 'visible',
            }}
          >
            {
            skills?.map((skill: skillsType, idx: number) => {
              return (
                <>
                <Skeleton key = {skill.id} isLoaded = {!isAddSkillLoading}>
                <Skeleton key = {skill.id} isLoaded = {!isRemoveSkillLoading}>
                <WrapItem
                  role='group'
                  sx={{
                    position: 'relative',
                  }}
                >
                  <Text
                    _groupHover={{ backgroundColor: '#c5fceb' }}
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
                    _groupHover={{ visibility: 'visible' }}
                    sx={{
                      position: 'absolute',
                      height: '17px',
                      padding: '2px',
                      lineHeight: '18px',
                      borderRadius: '50px',
                      minWidth: 'none',
                    }}
                    className={styles.skill_delete_btn}
                  >
                    <CloseIcon
                      sx={{
                        width: '19px',
                        height: '8px',
                      }}
                    />
                  </Button>
                </WrapItem>
                </Skeleton>
                </Skeleton>
                </>
              );
            })}
            {filteredTags?.length !== 0 && (
              <WrapItem>
                <IconButton
                  onClick={() => setIsTagsOpen((prevstate: boolean) => !prevstate)}
                  sx={{
                    height: '100%',
                  }}
                  aria-label='Add skills'
                  icon={
                    <AddIcon
                      sx={{
                        width: '1rem',
                        height: '1rem',
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