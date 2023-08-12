import { GetServerSidePropsContext } from "next";
import { Box, Flex } from "@chakra-ui/react";

import { wrapper } from "@/src/store";

import MemberProfileCard from "src/components/MemberProfileCard";
import MemberContributions from "@/src/components/MemberContribution";

import serverApi from "@/src/services/serverApi";

import styles from "./memberProfileWrapper.module.css";

export default function MembersProfile(props: any) {
  const {
    userData: { user },
    userContribution,
    userActiveTask,
  } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      width={"100%"}
    >
      <Flex
        width={"70%"}
        justifyContent={"center"}
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
    try {
      store.dispatch(serverApi.endpoints.getUser.initiate(memberprofile));
      store.dispatch(
        serverApi.endpoints.getContributions.initiate(memberprofile)
      );
      store.dispatch(
        serverApi.endpoints.getUserActiveTask.initiate(memberprofile)
      );
      const [userDetails, userContribution, activeTask] = await Promise.all(
        store.dispatch(serverApi.util.getRunningQueriesThunk())
      );
      const userData = userDetails?.data;
      const userActiveTask = activeTask?.data;

      return {
        props: {
          userData,
          userContribution,
          userActiveTask,
        },
      };
    } catch (e) {
      console.error(e);
    }
  }
);
