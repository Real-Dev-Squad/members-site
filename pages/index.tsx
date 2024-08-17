import MembersSectionMain from '@/src/components/MembersSectionNew/MembersSectionMain';
import NewMemberSection from '@/src/components/NewMemberSection';
import { NEW_USER } from '@/src/constants/AppConstants';
import styles from '@/styles/Home.module.css';
import { UserType } from '../src/components/MembersSectionNew/types/MembersSection.type';
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

export default function Home() {
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
