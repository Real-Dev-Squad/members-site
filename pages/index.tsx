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
  const [nextDocId, setNextDocId] = useState("");
  const [nextDoc, setNextDoc] = useState("");
  // const { data, isLoading, isFetching } = useGetAllUsersQuery(docId);
  // console.log("DATA from useGetAllUsersQuery", data);

  const {
    data: membersData,
    // nextDocLink,
    // previousDocLink,
    links,
    isLoading: membersIsLoading,
    isFetching: membersIsFetching,
  } = useGetMembers(nextDoc as string);
  console.log(
    "raw members data out if the useGetMembers function for supplying the data",
    membersData
  );

  const nextUrl = new URL(links?.next as string, BASE_URL as string);
  const nextDocParamValue = nextUrl.searchParams.get("next");
  console.log(
    "next doc ID which is extracted from the link inside response of USERS",
    nextDocParamValue
  );

  const previousUrl = new URL(links?.prev as string, BASE_URL as string);
  const prevoiusDocParamValue = previousUrl.searchParams.get("next");
  console.log(
    "prev doc ID which is extracted from the link inside response of USERS",
    nextDocParamValue
  );

  const [paginatedMembersData, setPaginatedMembersData] = useState([]);
  console.log("paginating members data", paginatedMembersData);

  function handlePaginatedData(nextDocId: string) {
    console.log("next doc id from the button clicked function before setting")
    setNextDocId(nextDocId);
  }
  console.log("next doc id", nextDocId);
  useEffect(() => {
    console.log("members data from useeffect", membersData);
    // setPaginatedMembersData(membersData as any);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Real Dev Squad Members</h1>
        <MembersSectionMain
          data={membersData as UserType[]}
          isLoading={membersIsLoading}
          isFetching={membersIsFetching}
        />
        <PaginationButtons
          nextUsers={nextDocParamValue as string}
          handlePaginatedData={handlePaginatedData}
          previousUsers={prevoiusDocParamValue as string}
        />
      </div>
      <div>
        <h1 className={styles.heading}>{NEW_USER}</h1>
        <NewMemberSection />
        <PaginationButtons
          nextUsers={nextDocParamValue as string}
          handlePaginatedData={handlePaginatedData}
          previousUsers={prevoiusDocParamValue as string}
        />
      </div>
    </div>
  );
}
