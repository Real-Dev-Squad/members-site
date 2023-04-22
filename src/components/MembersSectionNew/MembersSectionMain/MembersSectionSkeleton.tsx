import { Box } from "@chakra-ui/react";
import MembersCardSkeleton from "../components/MembersCardSkeleton";

export default function MembersSectionSkeleton() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
      <MembersCardSkeleton />
    </Box>
  );
}