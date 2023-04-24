import { Box } from '@chakra-ui/react';
import MembersSectionSkeleton from './MembersSectionSkeleton';
import MembersCard from '../components/MembersCard';
import { MemberProps } from '../types/MembersSection.type';
import styles from './MembersSection.module.css';

export default function MemberSectionPresentation({
  data,
  isLoading,
}: MemberProps) {
  let memberSection;
  if (isLoading) memberSection = <MembersSectionSkeleton />;
  else memberSection = data.map((member) => <MembersCard member={member} key={member.id} />);

  return <Box className={styles.members_section_container}>{memberSection}</Box>
}
