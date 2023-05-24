import MembersSectionMainPresentation from './Presentation';
import { useGetMembers } from '@/src/services/serverApi';

export default function MembersSectionMain() {
  // we will make the API call here
  const { data, isLoading } = useGetMembers()

  return <MembersSectionMainPresentation data={data} isLoading={isLoading} />
}