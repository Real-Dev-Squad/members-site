import { useSelector } from "react-redux";
import { useGetSelfDetailsQuery } from "../services/serverApi"
import { RootState } from "../store";

export const useGetIsSuperUser = (): boolean => {
  const { isLoggedIn } = useSelector((state: RootState) => state.global);
  const { data } = useGetSelfDetailsQuery(undefined, {
    skip: !isLoggedIn
  })
  if (data?.roles?.super_user) return true;
  return false;
}