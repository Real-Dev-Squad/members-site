import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
const BASE_URL = 'https://api.realdevsquad.com';

export const serverApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    tagTypes: [],
    endpoints: (builder) => ({
        // Queries 
        getMembers: builder.query<Array<Object>, void>({
            query: () => BASE_URL + '/members'
        }),
        getUser: builder.query<Object, string>({
            query: (userName) => `${BASE_URL}/users/${userName}`
        }),
        getContributions: builder.query<Object, string>({
            query: (userName) => `${BASE_URL}/contributions/${userName}`
        }),
        getUserActiveTask: builder.query<Object, string>({
            query: (userName) => `${BASE_URL}/tasks/${userName}?status=active`
        }),
        // Mutations
        // TODO add types for mutations
        updateMemberRole: builder.mutation({
            query: (body) => ({
                url: `/members/moveToMembers/${body.username}`,
                method: 'PATCH',
                body,
            })
        }),
        archiveMember: builder.mutation({
            query: (body) => ({
                url: `/members/archiveMembers/${body.username}`,
                method: 'PATCH',
                body,
            })
        }),
        updateTaskStatus: builder.mutation({
            query: (body) => ({
                url: `/tasks/${body.taskId}`,
                method: 'PATCH',
                body,
            })
        }),

    })
})

export const {
    useArchiveMemberMutation,
    useGetContributionsQuery,
    useGetMembersQuery,
    useGetUserActiveTaskQuery,
    useGetUserQuery,
    useUpdateMemberRoleMutation,
    useUpdateTaskStatusMutation,
} = serverApi

export default serverApi;

