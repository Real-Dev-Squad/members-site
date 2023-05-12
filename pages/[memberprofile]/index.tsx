import { GetServerSidePropsContext } from "next";
import { Box, Flex } from "@chakra-ui/react";

import { wrapper } from "@/src/store";

import MemberProfileCard from "src/components/MemberProfileCard";
import MemberContributions from "@/src/components/MemberContribution";

import serverApi from "@/src/services/serverApi";

export default function MembersProfile(props:any) {
const { userData:{ user }, userContribution } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      width={"100%"}
    >
      <Flex width={"70%"} justifyContent={"center"}>
        <MemberProfileCard userData={user} />
        <div
          style={{
            marginLeft: "10rem",
            width: "100%",
          }}
        >
          <MemberContributions userContribution={userContribution} />
        </div>
      </Flex>
    </Box>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  store => async (context:GetServerSidePropsContext<any>) => {

    const { params } = context;
    const { memberprofile } = params;
    try{

      store.dispatch(serverApi.endpoints.getUser.initiate(memberprofile));
      store.dispatch(serverApi.endpoints.getContributions.initiate(memberprofile));
      const [userDetails,userContribution] = await Promise.all(
        store.dispatch(serverApi.util.getRunningQueriesThunk())
      );
      const userData = userDetails?.data;

      return {
        props:{
          userData,
          userContribution
        }
      }
    }catch(e){
      console.error(e)
    } 
  }
);
