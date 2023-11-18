import Head from "next/head";
import Image from "next/image";
import { wrapper } from "@/src/store";
import serverApi, {
  useGetAllUsersQuery,
  // useGetNextUsersQuery,
} from "../src/services/serverApi";
// import NewMembersCard from "@/src/components/NewMember";
import { NEW_USER, NUM_MEMBERS_NUMBER } from "@/src/constants/AppConstants";
import styles from "@/styles/Home.module.css";
import MembersSectionMain from "@/src/components/MembersSectionNew/MembersSectionMain";
import NewMemberSection from "@/src/components/NewMemberSection";
import { UserType } from "../src/components/MembersSectionNew/types/MembersSection.type";
import PaginationButtons from "@/src/components/PaginationButtons/PaginationButtons";
import { useGetMembers } from "@/src/services/serverApi";
import { useEffect, useState } from "react";
import { UsersResponseType } from "@/src/types/user";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
type PictureType = {
  publicId: string;
  url: string;
};

type RolesType = {
  archived: boolean;
  member: boolean;
};

type MembersResponseType = {
  message: string;
  members: UserType[];
};

type PagePropsType = {
  membersResp: MembersResponseType;
};

type PropsType = {
  pageProps: PagePropsType;
};

export default function Home(props: PropsType) {
  const [docId, setDocId] = useState("");

  const { data, isLoading, isFetching } = useGetAllUsersQuery(docId);

  const {
    data: membersData,
    isLoading: membersIsLoading,
    isFetching: membersIsFetching,
  } = useGetMembers(data?.links?.next as string);
  const [paginatedMembersData, setPaginatedMembersData] = useState(membersData);
  console.log("paginated members data", paginatedMembersData);
  function handlePaginatedData(nextDocId: string) {
    setDocId(nextDocId);
  }

  const url = new URL(data?.links?.next as string, BASE_URL as string);
  const nextDocId = url.searchParams.get("next");
  useEffect(() => {
    setPaginatedMembersData(membersData as any);
  }, [nextDocId]);
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Real Dev Squad Members</h1>
        <MembersSectionMain
          data={paginatedMembersData as UserType[]}
          isLoading={membersIsLoading}
          isFetching={membersIsFetching}
        />
        <PaginationButtons
          nextUsers={nextDocId as string}
          handlePaginatedData={handlePaginatedData}
          previousUsers={data?.links?.prev as string}
        />
      </div>
      <div>
        <h1 className={styles.heading}>{NEW_USER}</h1>
        <NewMemberSection />
        <PaginationButtons
          nextUsers={data?.links?.next as string}
          handlePaginatedData={handlePaginatedData}
          previousUsers={data?.links?.prev as string}
        />
      </div>
    </div>
  );
}
