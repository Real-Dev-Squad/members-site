import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useGetIsSuperUser = (): boolean => {
  const { roles } = useSelector((state: RootState) => state.global);

  if (roles?.super_user) return true;
  return false;
};
