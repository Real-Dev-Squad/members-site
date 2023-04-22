import { memberData } from '../data/data';
import MembersSectionMainPresentation from './MembersSectionMainPresentation';


export default function MembersSectionMain() {
  // we will make the API call here

  return <MembersSectionMainPresentation data={memberData} isLoading={false} />
}