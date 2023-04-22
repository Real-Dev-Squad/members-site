import { Box, Skeleton } from "@chakra-ui/react";

export default function MembersCardSkeleton() {
  return (
      <Skeleton
        width='100%'
        sx={{
          flex: '1 250px',
          margin: '20px',
          border: '1px solid #413f3f',
          padding: '20px 10px',
          background: 'white',
          cursor: 'pointer',
          maxWidth: '270px',
          boxShadow: '0 0 15px -7px rgba(0, 0, 0, 0.65)',
          borderRadius: '5%',
          height: '350px'
        }}
      />
  );
}