import { Avatar, Box } from "@chakra-ui/react";
import NewMemberCardPresentation from "./NewMemberCard/Presentation";
import NewMemberSectionPresentation from "./Presentation";
import { useGetUsers } from "@/src/services/serverApi";

export default function NewMemberSection() {
  // we will make the api call here
  const {data, isLoading} = useGetUsers()
  return <NewMemberSectionPresentation data={data} isLoading={isLoading}  />
}