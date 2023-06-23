import serverApi from "@/src/services/serverApi";
import {
  levelsType,
  tagsType,
  tagsWithLevelType,
} from "@/src/components/Modals/MembersSkillUpdateModal/types/memberSkills";
import { useDispatch } from "react-redux";

export const tagsApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    //Queries
    getTags: builder.query({
      query: () => "/tags",
    }),
    getLevels: builder.query({
      query: () => "/levels",
    }),
    getSkills: builder.query({
      query: (username) => `/users/${username}/skills`,
      providesTags: ["Skill"],
    }),
    //Mutations
    addNewSkill: builder.mutation({
      query: (payload) => ({
        url: "/items",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Skill"],
      async onQueryStarted(payload, { dispatch, queryFulfilled }) {
        const addResult = dispatch(
          tagsApi.util.updateQueryData("getSkills", undefined, (draft) => {
            //console.log('payload', payload);
            //console.log('cached data', JSON.stringify(draft?.skills));
            //draft?.skills?.push(payload);
            //console.log('addresult', JSON.stringify(draft?.skills));
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          addResult.undo();
          console.log("add error", error);
        }
      },
    }),
    removeSkills: builder.mutation({
      query: (payload) => ({
        url: "/items",
        method: "DELETE",
        body: payload,
      }),
      async onQueryStarted(payload, { dispatch, queryFulfilled }) {
        const removeResult = dispatch(
          tagsApi.util.updateQueryData("getSkills", undefined, (draft) => {
            console.log("payload", payload);
            console.log("cached data", JSON.stringify(draft));
            const updatedRes = draft?.skills?.filter(
              (skill) => skill.tagId !== payload.tagId
            );
            console.log("updated res", JSON.stringify(updatedRes));
            return draft?.skills?.filter(
              (skill) => skill.tagId !== payload.tagId
            );
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          removeResult.undo();
          console.log("error", error);
        }
      },
      invalidatesTags: ["Skill"],
    }),
  }),
});

export const {
  useGetTagsQuery,
  useGetLevelsQuery,
  useGetSkillsQuery,
  useAddNewSkillMutation,
  useRemoveSkillsMutation,
} = tagsApi;

export const useGetLevels = () => {
  const { data: tagsData, isLoading: isTagsLoading } =
    tagsApi.useGetTagsQuery();
  const { data: levelsData, isLoading: isLevelsLoading } =
    tagsApi.useGetLevelsQuery();
  const tags: tagsType[] = tagsData?.tags;
  const levels: levelsType[] = levelsData?.levels;

  let tagsWithLevel: tagsWithLevelType[] = [];

  if (isTagsLoading && isLevelsLoading) {
    return [];
  } else {
    for (let i = 0; i < tags?.length; i++) {
      for (let j = 0; j < levels?.length; j++) {
        tagsWithLevel = [
          ...tagsWithLevel,
          {
            name: `${tags[i].name} level ${levels[j].name}`,
            tagId: tags[i].id,
            levelId: levels[j].id,
            tagType: `${tags[i].type}`,
            tagName: `${tags[i].name}`,
            levelName: `${levels[j].name}`,
            levelValue: levels[j].value
          },
        ];
      }
    }
  }

  return {
    tagsWithLevel,
  };
};

export function useUpdateUsersSkillMutation() {
const reduxDispatch = useDispatch();
const [ addNewSkill ] = useAddNewSkillMutation();

  function updateUsersSkill(payload) {
    reduxDispatch(
      tagsApi.util.updateQueryData("getSkills", undefined, (draft) => {
        draft?.skills?.push(payload)
      })
    );

    addNewSkill({
        itemId: payload.itemId,
        itemType: payload.itemType,
        tagPayload: [{ tagId: `${payload.tagId}`, levelId: `${payload.levelId}`}],
    })

  }

  return [updateUsersSkill];
}
