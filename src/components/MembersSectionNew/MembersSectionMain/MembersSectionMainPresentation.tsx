import { Box } from '@chakra-ui/react';
import { MemberProps } from '../types/MembersSection.type';
import MembersCard from '../components/MembersCard/MembersCard';
import MembersSectionSkeleton from './MembersSectionSkeleton';
import styles from './MembersSection.module.css';

export default function MembersSectionMainPresentation({
  data,
  isLoading,
}: MemberProps) {
  if (isLoading) return <MembersSectionSkeleton />;
  return (
    <Box className={styles['members_section_container']}>
      {data.map((member) => (
        <MembersCard member={member} key={member.id} />
      ))}
    </Box>
  );
}
