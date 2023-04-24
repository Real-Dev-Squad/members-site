import MembersCardSkeleton from '../components/MembersCard/MembersCardSkeleton';

export default function MembersSectionSkeleton() {
  const MemberSkeletonCards = Array.from({ length: 15 }).map((_, index) => (
    <MembersCardSkeleton key={index} />
  ));
  return <>{MemberSkeletonCards}</>;
}
