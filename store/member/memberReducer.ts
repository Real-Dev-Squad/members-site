import { MEMBER_STATE, DISPATCH } from "@/types/member_store";

export const memberReducer = (
  state: MEMBER_STATE,
  { type, payload }: DISPATCH
) => {
  switch (type) {
    case "SET_MEMBERS":
      return {
        ...state,
        members: payload.members,
        newMembers: payload.newMembers,
      };
    case "SET_ERRORS":
      return {
        ...state,
        errorMsg: payload,
      };
    default:
      return state;
  }
};
