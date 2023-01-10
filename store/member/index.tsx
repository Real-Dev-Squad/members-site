import { createContext, FC, ReactElement, useContext, useReducer } from "react";
import { DISPATCH, MEMBER_CONTEXT } from "@/types/member_store";
import { memberReducer } from "./memberReducer";

const initialState = {
  members: [],
  newMembers: [],
  errorMsg: "",
};

const MembersContext = createContext<MEMBER_CONTEXT>({
  state: initialState,
  dispatch: (input: DISPATCH): void => {},
});

export const MembersProvider: FC<{ children: ReactElement }> = ({
  children,
}): ReactElement => {
  const [state, dispatch] = useReducer(memberReducer, initialState);
  return (
    <MembersContext.Provider value={{ state, dispatch }}>
      {children}
    </MembersContext.Provider>
  );
};

export const useMembersContext = () => {
  const context = useContext(MembersContext);
  if (!context)
    throw new Error(`members context can only  
          be used in a component wrapped with MembersContext`);
  return context;
};
