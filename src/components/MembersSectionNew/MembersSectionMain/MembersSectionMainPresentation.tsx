import { Box } from '@chakra-ui/react';
import { MemberProps } from '../types/MembersSection.type';
import MembersCard from '../components/MembersCard';
import MembersCardSkeleton from '../components/MembersCardSkeleton';
import MembersSectionSkeleton from './MembersSectionSkeleton';
// import MembersCard from "../components/MembersCard";

export default function MembersSectionMainPresentation({
  data,
  isLoading,
}: MemberProps) {
  
  if (isLoading) return <MembersSectionSkeleton />
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {data.map((member) => (
        <MembersCard member={member} key={member.id} />
      ))}
    </Box>
  );
}
