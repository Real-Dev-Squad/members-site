import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function NewMemberCardSkeleton() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <SkeletonCircle size='20' />
    </Box>
  );
}