import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Avatar,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { useState } from "react";
import MembersActiveSkills from "./components/MembersActiveSkills/MembersActiveSkills";
import TagsMoadal from "./components/TagsModal/TagsModal";
import { tagsWithLevelType, skillsType } from "@/src/components/Modals/MembersSkillUpdateModal/types/memberSkills";
import { useGetLevels, useGetSkillsQuery } from "@/src/services/serverApi";
import styles from "./memberSKillModal.module.css";
import { useAddNewSkillMutation } from "@/src/services/serverApi";

export default function MembersSkillUpdateModalPresentation({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const { username, picture, firstName, lastName } =
    useSelector((state: RootState) => state.superUserOption);
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const [searchTags, setSearchTags] = useState('');
  const { tagsWithLevel } = useGetLevels();
  const { data, isLoading: isSkillsLoading } = useGetSkillsQuery(username);
  const [ addNewSkill, { isLoading: isAddSkillLoading } ] = useAddNewSkillMutation();

  const skills = data?.skills;

  const filteredTagsData = (
    tags: tagsWithLevelType[],
    skills: skillsType[]
  ) => {
    if (searchTags !== '') {
      return tags?.filter((tag) =>
        tag.name.toLowerCase().includes(searchTags.toLowerCase())
      );
    } else if (skills?.length >= 0) {
      return tags?.filter(
        (tag) =>
          !skills?.some((skill) => skill.tagId === tag.tagId && skill.levelId === tag.levelId)
      );
    }
    return tags;
  };

  const filteredTags = filteredTagsData(tagsWithLevel, skills);

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        sx={{
          width: '24rem',
          height: '37rem',
          position: 'relative',
          borderRadius: '15px',
        }}
      >
        <ModalHeader
          sx={{
            height: '6rem',
            width: '100%',
            padding: '0',
            borderRadius: '15px 15px 0 0',
            backgroundColor: '#1b1378',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 'none',
          }}
        >
          <Avatar
            sx={{
              width: '80px',
              height: '80px',
              position: 'absolute',
              left: '2rem',
              bottom: '-1.7rem',
            }}
            name={firstName}
            src={picture}
          />
          <p className={styles.memberProfile_name}>{
            `${firstName} ${lastName?.charAt(0)}.`
          }</p>
        </ModalHeader>
        <ModalCloseButton
          sx={{
            fontSize: '1rem',
          }}
          color='#fff'
        />
        <ModalBody
          sx={{
            padding: '2rem',
            marginTop: '1rem',
          }}
        >
          <p className={styles.modalBody_heading}>Skills</p>
          {
            <MembersActiveSkills 
              username={username}
              filteredTags={filteredTags} 
              setIsTagsOpen={setIsTagsOpen} 
              skills={skills}
              isSkillsLoading={isSkillsLoading}
              isAddSkillLoading={isAddSkillLoading}
            />
          }
          {
            isTagsOpen && <TagsMoadal username={username} searchTags={searchTags} setSearchTags={setSearchTags} setIsTagsOpen={setIsTagsOpen} filteredTags={filteredTags} addNewSkill={addNewSkill} />
          }
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
