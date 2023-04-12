import { useGetMembersQuery } from '@/src/services/serverApi';
import MemberCard from './MemberCard';
import SkeletonMembersCard from './MemberCard.skeleton';
import {memberData} from './data'

export default function MembersSection() {
  return (
    <div className='flex flex-wrap w-full mx-auto justify-center gap-x-2.5 gap-y-2.5'>
      {memberData.map((user) => (
        <MemberCard user={user} key={user.id} />
      ))}
      <div className='empty'></div>
    </div>
  );
}
