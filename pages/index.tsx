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
  const [abc, setAbc] = useState("");

  const {
    data: membersData,
    nextLink,
    prevLink,
    isLoading: membersIsLoading,
    isFetching: membersIsFetching,
  } = useGetMembers(abc as string);

  const nextUrl = new URL(nextLink as string, BASE_URL as string);
  const nextDocParamValue = nextUrl.searchParams.get("next");

  const previousUrl = new URL(prevLink as string, BASE_URL as string);
  const prevoiusDocParamValue = previousUrl.searchParams.get("next");

  function handleNextClick() {
    setAbc(nextLink ?? "");
  }
  function handlePreviousClick() {
    setAbc(prevLink ?? "");
  }

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
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
          previousUsers={prevoiusDocParamValue as string}
        />
      </div>
      <div>
        <h1 className={styles.heading}>{NEW_USER}</h1>
        <NewMemberSection />
        <PaginationButtons
          nextUsers={nextDocParamValue as string}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
          previousUsers={prevoiusDocParamValue as string}
        />
      </div>
    </div>
  );
}
