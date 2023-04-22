import { Box } from "@chakra-ui/react";
import MembersCardSkeleton from "../components/MembersCard/MembersCardSkeleton";

import styles from './MembersSection.module.css'

export default function MembersSectionSkeleton() {
  return (
    <Box className={styles['members_section_container']}>
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