import { useGetUserWithLoadMore } from '@/src/services/serverApi';
import NewMemberSectionPresentation from './Presentation';
import { Button } from '@chakra-ui/react';
import styles from './newMemberSection.module.css'

export default function NewMemberSection() {
  const { data, isLoading, isFetching, loadMore, links } = useGetUserWithLoadMore()

  return (
    <div>
      <NewMemberSectionPresentation
        data={data}
        isLoading={isLoading}
      />

      {links?.next && links.next.length &&
        <div className={styles.newMemberSectionLoadMore__container}>

          <Button
            onClick={loadMore}
            isLoading={isFetching}
            loadingText="Loading..."
            className={styles.newMemberSectionLoadMore__button}
          >
            Load More
          </Button>
        </div>
      }
    </div>
  );
}
