import { LINKS } from '../constants/AppConstants'

export const getAuthUrl = () => {
  let authUrl = LINKS.AUTH_URL
  if (typeof window !== 'undefined') {
    authUrl = `${authUrl}&state=${window.location.href}`
  }

  return authUrl
}
