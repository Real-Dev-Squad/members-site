import { Box } from "@chakra-ui/react";
import { MemberProps } from "../types/MembersSection.type";
import MembersCard from "../components/MembersCard";
// import MembersCard from "../components/MembersCard";

export default function MembersSectionMainPresentation({ data, isLoading }: MemberProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      
      {data.map(member => (
        <MembersCard member={member} key={member.id}  />
      ))}
    </Box>
  )
}
