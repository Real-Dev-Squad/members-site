import { Box } from '@chakra-ui/react';

import MembersCard from '../components/MembersCard/MembersCard';
import MembersSectionSkeleton from './MembersSectionSkeleton';

import { MemberProps } from '../types/MembersSection.type';
import styles from './MembersSection.module.css';

export default function MembersSectionMainPresentation({
  data,
  isLoading,
}: MemberProps) {
  let memberSection;
  if (isLoading) memberSection = <MembersSectionSkeleton />;
  else memberSection = (
    <Box className={styles['members_section_container']}>
      {data.map((member) => (
        <MembersCard member={member} key={member.id} />
      ))}
    </Box>
  );
  
  return (<>{memberSection}</>)
}
