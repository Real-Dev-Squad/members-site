import { Box, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, FC, SetStateAction } from 'react'
import { getAuthUrl } from '@/src/utils/auth'

import { NavbarTypes } from '../types/navbar'
import dummyImage from '../../../../../public/images/Avatar.png'
import downArrow from '../../../../../public/icons/icons8-arrow.png'

import styles from './userProfile.module.css'

export const UserProfileWithGitHubLogin: FC<NavbarTypes> = ({
  isLoggedIn,
  firstName,
  imageURL,
  setIsDropdownVisible,
}) => {
  const altText: string = firstName ?? 'user image'
  const imageToShow = imageURL || dummyImage
  const authURL = getAuthUrl()

  return (
    <>
      {isLoggedIn ? (
        <Box
          data-testid="userProfile"
          className={styles.userprofile_container}
          onClick={() => setIsDropdownVisible((prevState) => !prevState)}
        >
          <Text
            className={styles.userprofile_user__first_name}
          >{`Hello, ${firstName}`}</Text>
          <Box className={styles.userprofile_image__wrapper}>
            <Image
              className={styles.userProfile_user__image}
              src={imageToShow}
              width={32}
              height={32}
              alt={altText}
            />
            <Image width={15} height={15} src={downArrow} alt="downArrow" />
          </Box>
        </Box>
      ) : (
        <Link href={authURL}>
          <Button className={styles.userProfile_github__button}>
            <Text>Sign in with github</Text>
            <Image
              src="/icons/Github_Logo.svg"
              width={20}
              height={20}
              alt="git"
            />
          </Button>
        </Link>
      )}
    </>
  )
}
