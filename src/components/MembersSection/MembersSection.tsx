import { useGetMembersQuery } from '@/src/services/serverApi';
import MemberCard from './MemberCard';
import SkeletonMembersCard from './MemberCard.skeleton';
import {memberData} from './data'
import MemberSectionLoading from './MemberSectionLoading';

export default function MembersSection() {
return <MemberSectionLoading />
  return (
    <div className='flex flex-wrap w-full mx-auto justify-between w-[90%] gap-x-1.5 gap-y-1.5'>
      {memberData.map((user) => (
        <MemberCard user={user} key={user.id} />
      ))}
      <div className='empty'></div>
    </div>
  );
}
