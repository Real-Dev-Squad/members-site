import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Avatar,
  Wrap,
  WrapItem,
  Text,
  IconButton,
  Box,
  Input,
} from "@chakra-ui/react";
import styles from "./memberSKillModal.module.css";
import { CloseIcon, AddIcon, SearchIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";

export type SkillType = {
  role: string;
};

const skills = [
  {
    role: "Moderators",
  },
  {
    role: "Members",
  },
  {
    role: "Developers",
  },
  {
    role: "Server Booster",
  },
  {
    role: "D&S Algo'ers",
  },
  {
    role: "Hangouters",
  },
  {
    role: "Gamers",
  },
  {
    role: "Team-UI-UX",
  },
  {
    role: "Team-DX",
  },
];

export default function MembersSkillUpdateModalPresentation({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const [activeTags, setActiveTags] = useState<SkillType[]>([]);
  const [searchTags, setSearchTags] = useState("");
  const inputRef = useRef("");

  const filteredTagsData = (
    skills: SkillType[],
    activeTags: SkillType[]
  ) => {
    if (searchTags !== "") {
      return skills.filter((skill: SkillType) =>
        skill.role.toLowerCase().includes(searchTags.toLowerCase())
      );
    } else if (activeTags.length > 0) {
      return skills.filter(
        (skill: SkillType) =>
          !activeTags.some((activeSkill: SkillType) => skill === activeSkill)
      );
    }
    return skills;
  };

  const filteredTags = filteredTagsData(skills, activeTags);

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        sx={{
          width: "24rem",
          height: "37rem",
          position: "relative",
          borderRadius: "15px",
        }}
      >
        <ModalHeader
          sx={{
            height: "6rem",
            width: "100%",
            padding: "0",
            borderRadius: "15px 15px 0 0",
            backgroundColor: "#1b1378",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            flex: "none",
          }}
        >
          <Avatar
            sx={{
              width: "80px",
              height: "80px",
              position: "absolute",
              left: "2rem",
              bottom: "-1.7rem",
            }}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <p className={styles.memberProfile_name}>Mahima K.</p>
        </ModalHeader>
        <ModalCloseButton
          sx={{
            fontSize: "1rem",
          }}
          color="#fff"
        />
        <ModalBody
          sx={{
            padding: "2rem",
            marginTop: "1rem",
          }}
        >
          <p className={styles.modalBody_heading}>Skills</p>
          <Wrap
            spacing="1rem"
            sx={{
              margin: "1rem 0.43rem",
              overflow: "visible",
            }}
          >
            {activeTags.map((skill, idx) => {
              return (
                <WrapItem
                  key={idx}
                  role="group"
                  sx={{
                    position: "relative",
                  }}
                >
                  <Text
                    _groupHover={{ backgroundColor: "#c5fceb" }}
                    className={styles.memberSkillModal_skill}
                  >
                    {skill.role}
                  </Text>
                  <Button
                    onClick={() => {
                      const filteredTags = activeTags.filter(
                        (activeSkill) => skill.role !== activeSkill.role
                      );
                      setActiveTags(filteredTags);
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
              );
            })}
            {filteredTags.length !== 0 && (
              <WrapItem>
                <IconButton
                  onClick={() => setIsTagsOpen((prevstate) => !prevstate)}
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
          {isTagsOpen && (
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
                  {filteredTags.map((skill: SkillType, idx) => {
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
                            setActiveTags((prevstate) => [
                              ...prevstate,
                              skill,
                            ]);
                            setIsTagsOpen(false);
                            setSearchTags("");
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
                          {skill.role}
                        </Button>
                      </WrapItem>
                    );
                  })}
                </Wrap>
              </Box>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
