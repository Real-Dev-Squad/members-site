import MembersSectionMainPresentation from './Presentation';
import { memberData } from '../data/data';

export default function MembersSectionMain() {
  // we will make the API call here

  return <MembersSectionMainPresentation data={memberData} isLoading={false} />
}