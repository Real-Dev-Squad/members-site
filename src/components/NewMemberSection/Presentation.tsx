import { Box } from '@chakra-ui/react';
import styles from './MembersSection.module.css';
//TODO change this
import { MemberProps } from '../MembersSectionNew/types/MembersSection.type';
import NewMemberSectionSkeleton from './NewMemberSectionSkeleton';
import NewMemberCard from './NewMemberCard';

export default function NewMemberSectionPresentation({
  data,
  isLoading,
}: MemberProps) {
  let memberSection;
  if (isLoading) memberSection = <NewMemberSectionSkeleton />;
  else
    memberSection = data?.map((member) => (
      <NewMemberCard user={member} key={member.id} />
    ));

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 auto',
        width: '100%',
        gap: '10px',
        justifyContent: 'center',
      }}
    >
      {memberSection}
    </Box>
  );
}
