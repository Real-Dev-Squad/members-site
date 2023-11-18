import { UsersResponseType } from "@/src/types/user";
import MembersSectionMainPresentation from "./Presentation";
import { useGetMembers } from "@/src/services/serverApi";
import { UserType } from "../types/MembersSection.type";

export default function MembersSectionMain({
  data,
  isLoading,
  isFetching,
}: {
  data: UserType[];
  isLoading: boolean;
  isFetching: boolean;
}) {
  // we will make the API call here
  // const { data, isLoading, isFetching } = useGetMembers();
  // console.log("Members actually",data);
  return (
    <MembersSectionMainPresentation
      data={data}
      isLoading={isLoading || isFetching}
    />
  );
}
