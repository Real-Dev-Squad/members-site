import NewMemberCardSkeleton from "./NewMemberCard/NewMemberCardSkeleton";

export default function NewMemberSectionSkeleton() {
  const NewMemberSkeletonCards = Array.from({ length: 48 }).map((_, index) => (
    <NewMemberCardSkeleton key={index} />
  ));
  return <>{NewMemberSkeletonCards}</>;
}
