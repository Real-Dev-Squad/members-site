import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { MemberType } from '../components/MembersSectionNew/types/MembersSection.type';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const serverApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Contributions', 'ActiveTasks'],
  endpoints: (builder) => ({
    // Queries
    getMembers: builder.query<MembersResponseType, void>({
      query: () => BASE_URL + '/members',
    }),
    getUser: builder.query<MemberType, string>({
      query: (userName) => `${BASE_URL}/users/${userName}`,
    }),
    getSelfDetails: builder.query<MemberType, void>({
      query: () => `${BASE_URL}/users/self`
    }),
    getContributions: builder.query<Object, string>({
      query: (userName) => `${BASE_URL}/contributions/${userName}`,
      providesTags: ['Contributions']
    }),
    getUserActiveTask: builder.query<Object, string>({
      query: (userName) => `${BASE_URL}/tasks/${userName}?status=active`,
      providesTags: ['ActiveTasks']
    }),
    // Mutations
    // TODO add types for mutations
    updateMemberRole: builder.mutation({
      query: ({username}) => ({
        url: `/members/moveToMembers/${username}`,
        method: 'PATCH',
      }),
    }),
    archiveMember: builder.mutation({
      query: ({username}) => ({
        url: `/members/archiveMembers/${username}`,
        method: 'PATCH',
      }),
    }),
    updateTaskStatus: builder.mutation({
      query: ({ isNoteworthy, taskId }) => ({
        url: `/tasks/${taskId}`,
        method: 'PATCH',
        body: {
          isNoteworthy
        },
      }),
      invalidatesTags: ['ActiveTasks', 'Contributions']
    }),
  }),
});

export const {
  useArchiveMemberMutation,
  useGetContributionsQuery,
  useGetMembersQuery,
  useGetUserActiveTaskQuery,
  useGetUserQuery,
  useGetSelfDetailsQuery,
  useUpdateMemberRoleMutation,
  useUpdateTaskStatusMutation,
} = serverApi;

export const useGetMembers = () => {
  const { data, isLoading, error } = serverApi.useGetMembersQuery()
  const membersWithRole = data?.members?.filter(
    (member: MemberType) =>
      member?.isMember === true && member?.first_name && !member.roles.archived
  );
  const sortedUsers = membersWithRole?.sort((a,b) => a.first_name > b.first_name ? 1 : -1) 

  return {
    data: sortedUsers,
    isLoading,
    error
  }
}

export const useGetUsers = () => {
  const { data, isLoading, error } = serverApi.useGetMembersQuery()
  const membersWithRole = data?.members?.filter((member: MemberType) => member?.isMember === false && member?.first_name && !member.roles.archived)
  const sortedUsers = membersWithRole?.sort((a,b) => a.first_name > b.first_name ? 1 : -1) 

  return {
    data: sortedUsers,
    isLoading,
    error
  }
}

export default serverApi;
