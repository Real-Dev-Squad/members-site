import Head from "next/head";
import Image from "next/image";
import { wrapper } from "@/src/store";
import serverApi, { useGetUsersQuery } from "../src/services/serverApi";
// import NewMembersCard from "@/src/components/NewMember";
import { NEW_USER, NUM_MEMBERS_NUMBER } from "@/src/constants/AppConstants";
import styles from "@/styles/Home.module.css";
import MembersSectionMain from "@/src/components/MembersSectionNew/MembersSectionMain";
import NewMemberSection from "@/src/components/NewMemberSection";

type PictureType = {
  publicId: string;
  url: string;
};

type RolesType = {
  archived: boolean;
  member: boolean;
};

type MemberType = {
  id: string;
  yoe: number;
  picture: PictureType;
  github_id: string;
  linkedin_id: string;
  instagram_id: string;
  twitter_id: string;
  roles: RolesType;
  last_name: string;
  profileURL: string;
  designation: string;
  github_display_name: null;
  company: string;
  username: string;
  first_name: string;
  profileStatus: string;
  status: string;
  incompleteUserDetails: boolean;
};

type MembersResponseType = {
  message: string;
  members: MemberType[];
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
