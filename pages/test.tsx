import { useGetContributionsQuery, useGetMembersQuery, useGetUserQuery, useGetUserActiveTaskQuery } from '@/src/services/serverApi'
import React from 'react'
import { wrapper } from '@/src/store';

interface Member {
  [key: string]: string;
}

interface MyProps {
  members: Member;
}

function Test(props:MyProps) {
  // const { data : members } = useGetMembersQuery(1);
  const { members } = props;
  const { data : user } = useGetUserQuery("satyam-bajpai");
  const {data : contributions } = useGetContributionsQuery("satyam-bajpai");
  const {data : activeUserTasks } = useGetUserActiveTaskQuery("satyam-bajpai");
  
  console.log("tasks ", activeUserTasks);
  return (
    <>
      <div>{members?.message}</div>
      <div>{user?.message}</div>
    </>
  )
}

export default Test;