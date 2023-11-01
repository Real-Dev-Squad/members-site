import Head from "next/head";
import Image from "next/image";
import { wrapper } from "@/src/store";
import serverApi, { useGetAllUsersQuery } from "../src/services/serverApi";
// import NewMembersCard from "@/src/components/NewMember";
import { NEW_USER, NUM_MEMBERS_NUMBER } from "@/src/constants/AppConstants";
import styles from "@/styles/Home.module.css";
import MembersSectionMain from "@/src/components/MembersSectionNew/MembersSectionMain";
import NewMemberSection from "@/src/components/NewMemberSection";
import { UserType } from "../src/components/MembersSectionNew/types/MembersSection.type";
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
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Real Dev Squad Members</h1>
        <MembersSectionMain />
      </div>
      <div>
        <h1 className={styles.heading}>{NEW_USER}</h1>
        <NewMemberSection />
      </div>
    </div>
  );
}

