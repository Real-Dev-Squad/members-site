import ContentLoader from 'react-content-loader';

export default function SkeletonMembersCard() {
  return (
    <ContentLoader viewBox='0 0 380 70' backgroundColor='#6e7570' speed={2}>
      <rect x='0' y='0' rx='0' ry='0' width='20rem' height='20' />
    </ContentLoader>
  );
}
