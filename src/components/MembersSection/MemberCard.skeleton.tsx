import ContentLoader from 'react-content-loader';

export default function SkeletonMembersCard() {
  return (
    <ContentLoader
      speed={2}
      width={240}
      height={400}
      viewBox='0 0 240 400'
      backgroundColor='#ebebeb'
      foregroundColor='#d8d8d8'
    >
      <rect x='0' y='0' rx='30' ry='30' width='240' height='400' />
    </ContentLoader>
  );
}
