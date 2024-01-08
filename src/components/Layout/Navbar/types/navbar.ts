import { Dispatch, SetStateAction } from 'react'

export type NavbarTypes = {
  isLoggedIn: boolean
  firstName: string | null
  imageURL: string | null
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>
}
