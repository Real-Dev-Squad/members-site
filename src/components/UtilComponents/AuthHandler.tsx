import { useGetSelfDetailsQuery } from '@/src/services/serverApi'
import { setIsLoggedIn, setUserData } from '@/src/store/global'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

type Props = {
   children: JSX.Element
}

export default function AuthHandler(props: Props) {
   const { data: user, isLoading } = useGetSelfDetailsQuery()
   const reduxDispatch = useDispatch()

   useEffect(() => {
      if (!isLoading && user) {
         reduxDispatch(setIsLoggedIn({ isLoggedIn: true }))
         reduxDispatch(
            setUserData({
               firstName: user?.first_name,
               imageURL: user?.picture?.url,
               roles: user?.roles,
            }),
         )
      }
   }, [isLoading, user, reduxDispatch])

   return props.children
}
