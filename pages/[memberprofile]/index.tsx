import { GetServerSidePropsContext } from 'next';
import { Box, Flex } from '@chakra-ui/react';

import { wrapper } from '@/src/store';

import MemberProfileCard from 'src/components/MemberProfileCard';
import MemberContributions from '@/src/components/MemberContribution';

import serverApi from '@/src/services/serverApi';

import styles from './memberProfileWrapper.module.css';
import { useGetIsSuperUser } from '@/src/utils/customHooks';
import NotFound from '@/src/components/NotFound';
import { useRouter } from 'next/router';

export default function MembersProfile(props: any) {
  const { userData, userContribution, userActiveTask, error } = props;
  const router = useRouter();
  const user = userData?.user;
  const { memberprofile } = router.query;
  const isSuperUser = useGetIsSuperUser();
  const isUserMember = user?.roles?.member;

  if ((!isSuperUser && !isUserMember) || error?.status === 404)
    return (
      <NotFound
        text={`The user ${memberprofile} you're trying to find doesn't exist with us, please go to members to see all the available members we have`}
      />
    );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
      width={'100%'}
    >
      <Flex
        width={'70%'}
        justifyContent={'center'}
        className={styles.memberProfile_wrapper}
      >
        <MemberProfileCard userData={user} />
        <div className={styles.memberProfile_content}>
          <MemberContributions
            userContribution={userContribution}
            userActiveTask={userActiveTask.tasks}
          />
        </div>
      </Flex>
    </Box>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext<any>) => {
    const { params } = context;
    const { memberprofile } = params;

    // Start logging
    console.log('getServerSideProps started');

    console.time('getServerSideProps Total Time');

    try {
      console.time('API Calls Initiation');
      
      store.dispatch(serverApi.endpoints.getUser.initiate(memberprofile));
      store.dispatch(serverApi.endpoints.getContributions.initiate(memberprofile));
      store.dispatch(serverApi.endpoints.getUserActiveTask.initiate(memberprofile));
      
      console.timeEnd('API Calls Initiation');

      console.time('API Calls Resolution');
      
      const [userDetails, userContribution, activeTask] = await Promise.all(
        store.dispatch(serverApi.util.getRunningQueriesThunk()),
      );
      
      console.timeEnd('API Calls Resolution');
      
      const userData = userDetails?.data ?? null;
      const userActiveTask = activeTask?.data ?? null;

      if (userDetails?.error) {
        console.log('Error encountered:', userDetails?.error);
        console.timeEnd('getServerSideProps Total Time');
        return {
          props: {
            error: userDetails?.error,
          },
        };
      }

      console.log('getServerSideProps succeeded');
      console.timeEnd('getServerSideProps Total Time');

      return {
        props: {
          userData,
          userContribution,
          userActiveTask,
        },
      };
    } catch (e) {
      console.error('Exception caught:', e);
      console.timeEnd('getServerSideProps Total Time');
      return {
        props: {
          error: { status: 500, message: 'Internal Server Error' },
        },
      };
    }
  }
);
