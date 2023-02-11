import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
const BASE_URL = 'http://localhost:8000';

export const serverApi = createApi({
    // reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    extractRehydrationInfo(action, { reducerPath }){
        if(action.type === HYDRATE){
            return action.payload[reducerPath];
        }
    },
    tagTypes: [],
    endpoints: (builder) => ({
        getMembers: builder.query({
            query: () => BASE_URL + '/members'
        }),
        getUser: builder.query({
            query: (userName)=> `${BASE_URL}/users/${userName}`
        }),
        getContributions: builder.query({
            query: (userName)=> `${BASE_URL}/contributions/${userName}`
        }),
        getUserActiveTask: builder.query({
            query: (userName)=> `${BASE_URL}/tasks/${userName}?status=active`
        }),
        updateMemberRole: builder.mutation({
            query: (body)=> ({
                url: `/members/moveToMembers/${body.username}`,
                method: 'PATCH',
                body,
            })
        }),
        archiveMember: builder.mutation({
            query: (body)=> ({
                url: `/members/archiveMembers/${body.username}`,
                method: 'PATCH',
                body,
            })
        }),
        updateTaskStatus: builder.mutation({
            query: (body)=> ({
                url: `/tasks/${body.taskId}`,
                method: 'PATCH',
                body,
            })
        }),
        
    })
})

export const { useGetMembersQuery, useGetUserQuery, useGetContributionsQuery, useGetUserActiveTaskQuery, useUpdateMemberRoleMutation,useArchiveMemberMutation,useUpdateTaskStatusMutation, util: { getRunningQueriesThunk },} = serverApi;

export default serverApi;

