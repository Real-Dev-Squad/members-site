import MembersSectionMainPresentation from './Presentation'
import { useGetMembers } from '@/src/services/serverApi'

export default function MembersSectionMain() {
  // we will make the API call here
  const { data, isLoading, isFetching } = useGetMembers()

  return (
    <MembersSectionMainPresentation
      data={data}
      isLoading={isLoading || isFetching}
    />
  )
}
