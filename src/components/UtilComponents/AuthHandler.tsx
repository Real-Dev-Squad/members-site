import { useGetSelfDetailsQuery } from "@/src/services/serverApi";
import { setIsLoggedIn } from "@/src/store/global";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

type Props = {
  children: JSX.Element;
};


export default function AuthHandler(props: Props) {
  const {data: user, isLoading} = useGetSelfDetailsQuery()
  const reduxDispatch = useDispatch()

  useEffect(() => {
    if (user) reduxDispatch(setIsLoggedIn({isLoggedIn: true}))
  }, [isLoading, user])

  return props.children
}