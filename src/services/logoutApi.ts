import serverApi from "./serverApi";

const LOGOUT_URL = "https://api.realdevsquad.com/auth/signout";

export const logoutApi = serverApi.injectEndpoints({
    endpoints: (builder) => ({
        logoutUser: builder.mutation({
            query: () => ({
                url: LOGOUT_URL,
                method: 'GET',
            }),
        })
    })
})

export const { useLogoutUserMutation } = logoutApi;