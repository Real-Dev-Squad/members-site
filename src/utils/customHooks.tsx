import { useGetSelfDetailsQuery } from "../services/serverApi"

export const useGetIsSuperUser = (): boolean => {
  const { data } = useGetSelfDetailsQuery()
  if (data?.roles?.super_user) return true;
  return true;
}